import React, { useEffect, useRef, useState } from 'react';

import { CodeBlock } from 'components/CodeBlock/CodeBlock';
import { CopyStatus } from 'components/CopyStatus/CopyStatus';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DebounceInput } from 'react-debounce-input';
import { Layout } from 'components/Layout/Layout';
import SelectTimezone from 'components/SelectTimezone/SelectTimezone';

const Input = () => <input />;

const Page = () => {
  const [dateTimeFieldName, setDateTimeFieldName] = useState('CreatedDate');
  const [dateTimeFieldEpochFormula, setDateTimeFieldEpochFormula] = useState(
    "date_to_epoch(toDate(CreatedDate, \"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\"))"
  );
  const [dateTimeEpochVariableName, setDateTimeEpochVariableName] = useState('CreatedDate_epoch');
  const [dateTimeEpochConvertedVariableName, setDateTimeEpochConvertedVariableName] =
    useState('CreatedDate_GMT_epoch');
  const [dateTimeConvertedVariableName, setDateTimeConvertedVariableName] =
    useState('CreatedDate_GMT');
  const [dateTimeEpochConvertedFormula, setDateTimeEpochConvertedFormula] =
    useState('CreatedDate_epoch');
  const [dateTimeConvertedVariableFormulaNoDST, setDateTimeConvertedVariableFormulaNoDST] =
    useState('/* Awaiting Input */');
  const [dateTimeEpochConvertedFormulaDST, setDateTimeEpochConvertedFormulaDST] =
    useState('/* Awaiting Input */');

  const [dateTimeConvertedVariableNameCopied, setDateTimeConvertedVariableNameCopied] =
    useState(false);
  const [dateTimeEpochVariableNameCopied, setDateTimeEpochVariableNameCopied] = useState(false);
  const [dateTimeFieldEpochFormulaCopied, setDateTimeFieldEpochFormulaCopied] = useState(false);

  const [startYear, setStartYear] = useState(new Date().getFullYear() - 10);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [timezoneRegion, setTimezoneRegion] = useState('');
  const [timezoneNicename, setTimezoneNicename] = useState('UTC');
  const [isDst, setIsDst] = useState(false);
  const [supportDst, setSupportDst] = useState(true);
  const [offset, setOffset] = useState(0);
  const [modifier, setModifier] = useState('+');

  const startYearRef = useRef<HTMLInputElement>();
  const endYearRef = useRef<HTMLInputElement>();
  const dateTimeFieldNameRef = React.createRef<HTMLInputElement>();
  const dateTimeEpochVariableNameRef = React.createRef();

  const updateDSTFormula = () => {
    if (!isDst) return;

    const postData = {
      start_year: startYear,
      end_year: endYear,
      epoch_variable_name: dateTimeEpochVariableName,
      epoch_converted_variable_name: dateTimeEpochConvertedVariableName,
      timezone_name: timezoneNicename,
      timezone_region: timezoneRegion,
    };

    const body = Object.keys(postData)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(postData[k]))
      .join('&');

    fetch(`https://tools.missionmike.dev/einstein-analytics-convert-timezone/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })
      .then((response) => response.json()) // parse JSON from request
      .then((data) => {
        if (data.formula) {
          setDateTimeEpochConvertedFormulaDST(data.formula);
        }
      });
  };

  const updateVariables = () => {
    setDateTimeFieldEpochFormula(
      `date_to_epoch(toDate(${dateTimeFieldName}, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))`
    );

    setDateTimeEpochVariableName(dateTimeFieldName + '_epoch');

    // e.g. CreatedDate_epoch - 28000
    setDateTimeEpochConvertedFormula(
      `${dateTimeEpochVariableName} ${modifier} ${Math.abs(offset * 3600)}`
    );

    // e.g. CreatedDate_AmericaLosAngeles_epoch
    setDateTimeEpochConvertedVariableName(
      `${dateTimeFieldName}_${timezoneNicename.replace(/[^a-zA-Z0-9]+/g, '')}_epoch`
    );

    // e.g. CreatedDate_AmericaLosAngeles
    setDateTimeConvertedVariableName(
      `${dateTimeFieldName}_${timezoneNicename.replace(/[^a-zA-Z0-9]+/g, '')}`
    );

    setDateTimeConvertedVariableFormulaNoDST(
      `toDate(${dateTimeFieldEpochFormula} ${modifier} ${Math.abs(offset * 3600)})`
    );

    updateDSTFormula();
  };

  const handleDateTimeFieldNameChange = (e) => {
    setDateTimeFieldName(e.target.value);
    updateVariables();
  };

  const handleTimezoneChange = (evt) => {
    if (!evt?.target) return;

    // e.g. America/Los_Angeles
    setTimezoneNicename(
      evt.target.options[evt.target.selectedIndex].getAttribute('data-timezone-id')
    );
    setTimezoneRegion(
      evt.target.options[evt.target.selectedIndex].getAttribute('data-timezone-region')
    );

    // -12 through +14
    let newOffset = parseInt(evt.target.value, 10);
    setOffset(newOffset);

    // if offset is a negative number, modifier is for subtraction, otherwise addition
    setModifier(newOffset < 0 ? `-` : `+`);

    // does this timezone support DST (Daylight Savings Time)?
    setIsDst(
      parseInt(evt.target.options[evt.target.selectedIndex].getAttribute('data-dst'), 10) === 1
    );
  };

  const handleDateRangeChange = () => {
    setStartYear(parseInt(startYearRef?.current?.value, 10));
    setEndYear(parseInt(endYearRef?.current?.value, 10));
  };

  return (
    <Layout title="Convert Timezone 🌎⏲ in Tableau (formerly Einstein Analytics)" isProse={true}>
      <h1 className="mb-0">
        Convert Timezone{' '}
        <span role="img" aria-label="Globe Icon">
          🌎
        </span>
        <span role="img" aria-label="Timer Icon">
          ⏲
        </span>{' '}
        in Tableau (formerly Einstein Analytics)
      </h1>
      <h2>Step 1: Choose Field and Destination Timezone</h2>
      <p> Enter the original DateTime field name, which you want to convert:</p>
      <input
        type="text"
        name="date_field_name"
        id="date_field_name"
        ref={dateTimeFieldNameRef}
        placeholder="CreatedDate"
        defaultValue="CreatedDate"
        onChange={handleDateTimeFieldNameChange}
        aria-label="DateTime field name"
      />
      <p>Select your destination timezone:</p>
      <SelectTimezone onChange={handleTimezoneChange} />

      <div className="mt-4" style={isDst === false ? { display: 'none' } : { display: 'block' }}>
        <input
          type="checkbox"
          className="form-checkbox float-left mr-2 h-5 w-5 text-pink-600"
          onChange={() => setSupportDst(!supportDst)}
          defaultChecked={supportDst}
        />
        <span className="ml-2 -mt-1 block text-gray-700">Support Daylight Savings Time (DST)</span>
      </div>
      <div className={`${isDst === false ? `hidden` : `block`}`}>
        <p>
          <em>
            The timezone you selected supports Daylight Savings Time (DST).
            {supportDst
              ? ` For to-the-hour accuracy, select a range of years to support in
            your final formula. Years outside of this range will not take
            Daylight Savings Time (DST) into account.`
              : ` If you would like to account for DST in your final formula, check the box above.`}
          </em>
        </p>
        <div className={`${supportDst ? `flex` : `hidden`} flex-grow flex-row gap-4`}>
          <div className="flex flex-grow flex-col">
            <label htmlFor="start_year">Start Year:</label>
            <DebounceInput
              element={Input}
              type="number"
              value={startYear}
              name="start_year"
              inputRef={startYearRef}
              debounceTimeout={1000}
              onChange={handleDateRangeChange}
            />
          </div>
          <div className="flex flex-grow flex-col">
            <label htmlFor="end_year">End Year:</label>
            <DebounceInput
              element={Input}
              type="number"
              value={endYear}
              name="end_year"
              inputRef={endYearRef}
              debounceTimeout={1000}
              onChange={handleDateRangeChange}
            />
          </div>
        </div>
      </div>
      {/**
      Hide Step #2 if there is no timezone change; SF stores values in GMT/UTC by default, so if the 
      selected timezone is UTC, there's no point in moving forward...
       */}
      <div className={timezoneNicename === 'UTC' ? `hidden` : `block max-w-full`}>
        <h2>Step 2: Create {isDst && supportDst ? `These Fields` : `This Field`} in Dataflow!</h2>
        <p>
          In the Dataflow editor, add the following{' '}
          <a
            href="https://help.salesforce.com/articleView?id=bi_integrate_saql_transformation.htm&type=5"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            computeExpression
            {isDst && supportDst ? `s` : ``}
          </a>
          .
        </p>
        <div className={isDst === false || supportDst === false ? `block max-w-full` : `hidden`}>
          <h3>Field:</h3>
          <p>
            Name: <strong className="text-blue-900">{dateTimeConvertedVariableName}</strong>
            <br />
            Type: <em>Numeric (precision: 17, scale: 0)</em>
          </p>
          <label>
            Click below to copy formula for {dateTimeConvertedVariableName}:{' '}
            <CopyStatus copied={dateTimeConvertedVariableNameCopied} copyText="none" />
          </label>
          <CopyToClipboard
            text={dateTimeConvertedVariableFormulaNoDST}
            onCopy={() => setDateTimeConvertedVariableNameCopied(true)}
          >
            <CodeBlock>{dateTimeConvertedVariableFormulaNoDST}</CodeBlock>
          </CopyToClipboard>
        </div>
        <div className={isDst && supportDst ? `block max-w-full` : `hidden`}>
          <h3>Field #1:</h3>
          <p>
            Name: <strong className="text-blue-900">{dateTimeEpochVariableName}</strong>
            <br />
            Type: <em>Numeric (precision: 17, scale: 0)</em>
          </p>
          <label>
            Click below to copy formula for {dateTimeEpochVariableName}:{' '}
            <CopyStatus copied={dateTimeEpochVariableNameCopied} copyText="none" />
          </label>
          <CopyToClipboard
            text={dateTimeFieldEpochFormula}
            onCopy={() => setDateTimeEpochVariableNameCopied(true)}
          >
            <CodeBlock>{dateTimeFieldEpochFormula}</CodeBlock>
          </CopyToClipboard>
          <h3>Field #2:</h3>
          <p>
            Name: <strong className="text-blue-900">{dateTimeEpochConvertedVariableName}</strong>
            <br />
            Type: <em>Numeric (precision: 17, scale: 0)</em>
          </p>
          <label>
            <CopyStatus
              copied={dateTimeFieldEpochFormulaCopied}
              copyText={`Click below to copy formula for ${dateTimeEpochConvertedVariableName}`}
            />
          </label>
          <CopyToClipboard
            text={dateTimeEpochConvertedFormula}
            onCopy={() => setDateTimeFieldEpochFormulaCopied(true)}
          >
            <CodeBlock>{dateTimeEpochConvertedFormula}</CodeBlock>
          </CopyToClipboard>
          <h3>Field #3:</h3>
          <p>
            Name: <strong className="text-blue-900">{dateTimeConvertedVariableName}</strong>
            <br />
            Type: <em>Date</em>
          </p>
          <label>
            <CopyStatus
              copied={dateTimeConvertedVariableNameCopied}
              copyText={`Click below to copy formula for ${dateTimeConvertedVariableName}`}
            />
          </label>
          <CopyToClipboard
            text={dateTimeEpochConvertedFormulaDST}
            onCopy={() => setDateTimeConvertedVariableNameCopied(true)}
          >
            <CodeBlock> {dateTimeEpochConvertedFormulaDST}</CodeBlock>
          </CopyToClipboard>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
