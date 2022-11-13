import React, { useCallback, useEffect, useState } from 'react';

import { CodeBlock } from 'components/CodeBlock/CodeBlock';
import { CopyStatus } from 'components/CopyStatus/CopyStatus';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DebounceInput } from 'react-debounce-input';
import { Layout } from 'components/Layout/Layout';
import SelectTimezone from 'components/SelectTimezone/SelectTimezone';

const Input = () => <input />;

const Page = () => {
  const [dateTimeFieldName, setDateTimeFieldName] = useState('CreatedDate');
  const dateTimeFieldEpochFormula = `date_to_epoch(toDate(${dateTimeFieldName}, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))`;
  const dateTimeEpochVariableName = dateTimeFieldName + '_epoch';

  const [dateTimeEpochConvertedFormulaDST, setDateTimeEpochConvertedFormulaDST] =
    useState('/* Awaiting Input */');

  const [startYear, setStartYear] = useState(new Date().getFullYear() - 10);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [timezoneRegion, setTimezoneRegion] = useState('');
  const [timezoneNicename, setTimezoneNicename] = useState('UTC');
  const [isDst, setIsDst] = useState(false);
  const [supportDst, setSupportDst] = useState(true);
  const [offset, setOffset] = useState(0);
  const [modifier, setModifier] = useState('+');

  const dateTimeConvertedVariableName = `${dateTimeFieldName}_${timezoneNicename.replace(
    /[^a-zA-Z0-9]+/g,
    ''
  )}`;
  const dateTimeEpochConvertedVariableName = `${dateTimeFieldName}_${timezoneNicename.replace(
    /[^a-zA-Z0-9]+/g,
    ''
  )}_epoch`;

  const dateTimeConvertedVariableFormulaNoDST =
    Math.abs(offset) > 0
      ? `toDate(${dateTimeFieldEpochFormula} ${modifier} ${Math.abs(offset * 3600)})`
      : dateTimeFieldName;

  const dateTimeEpochConvertedFormula = `${dateTimeEpochVariableName} ${modifier} ${Math.abs(
    offset * 3600
  )}`;

  const updateDSTFormula = useCallback(() => {
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
  }, [
    dateTimeEpochConvertedVariableName,
    dateTimeEpochVariableName,
    endYear,
    isDst,
    startYear,
    timezoneNicename,
    timezoneRegion,
  ]);

  useEffect(() => {
    if (
      startYear > 1918 &&
      startYear < new Date().getFullYear() &&
      endYear > 1918 &&
      endYear < new Date().getFullYear() + 10 &&
      startYear <= endYear
    )
      updateDSTFormula();
  }, [startYear, endYear, updateDSTFormula]);

  const handleTimezoneChange = (evt) => {
    if (!evt?.target) return;

    const targetOptions = evt.target.options,
      selectedIndex = evt.target.selectedIndex;

    // e.g. America/Los_Angeles
    setTimezoneNicename(targetOptions[selectedIndex].getAttribute('data-timezone-id'));
    setTimezoneRegion(targetOptions[selectedIndex].getAttribute('data-timezone-region'));

    // -12 through +14
    let newOffset = parseInt(evt.target.value, 10);
    setOffset(newOffset);

    // if offset is a negative number, modifier is for subtraction, otherwise addition
    setModifier(newOffset < 0 ? `-` : `+`);

    // Does this timezone support DST (Daylight Savings Time)?
    setIsDst(parseInt(targetOptions[selectedIndex].getAttribute('data-dst'), 10) === 1);
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
        placeholder="CreatedDate"
        value={dateTimeFieldName}
        onChange={(e) => setDateTimeFieldName(e.target.value)}
        aria-label="DateTime field name"
      />

      <p>Select your destination timezone:</p>
      <SelectTimezone onChange={handleTimezoneChange} />

      <div style={{ display: isDst ? 'block' : 'none' }}>
        <input
          type="checkbox"
          onChange={() => setSupportDst(!supportDst)}
          defaultChecked={supportDst}
        />
        <span>Support Daylight Savings Time (DST)</span>
      </div>
      <div style={{ display: isDst ? 'block' : 'none' }}>
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
        <div style={{ display: supportDst ? 'block' : 'none' }}>
          <div>
            <label htmlFor="start_year">Start Year:</label>
            <input
              type="number"
              value={startYear}
              name="start_year"
              onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label htmlFor="end_year">End Year:</label>
            <input
              type="number"
              value={endYear}
              name="end_year"
              onChange={(e) => setEndYear(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
      </div>
      {/**
      Hide Step #2 if there is no timezone change; SF stores values in GMT/UTC by default, so if the 
      selected timezone is UTC, there's no point in moving forward...
       */}
      <div style={{ display: timezoneNicename === 'UTC' ? `none` : `block` }}>
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
          :
        </p>
        <div style={{ display: isDst === false || supportDst === false ? 'block' : 'none' }}>
          <h3>Field</h3>
          <p>
            <strong>Name:</strong>{' '}
            <code>
              <strong>{dateTimeConvertedVariableName}</strong>
            </code>
            <br />
            <strong>Type:</strong> Numeric (precision: 17, scale: 0)
          </p>
          <label>
            Click below to copy formula for {dateTimeConvertedVariableName}:{' '}
            <CopyStatus copyText="" />
          </label>
          <CopyToClipboard text={dateTimeConvertedVariableFormulaNoDST}>
            <CodeBlock>{dateTimeConvertedVariableFormulaNoDST}</CodeBlock>
          </CopyToClipboard>
        </div>
        <div style={{ display: isDst && supportDst ? 'block' : 'none' }}>
          <h3>Field #1:</h3>
          <p>
            <strong>Name:</strong> <code>{dateTimeEpochVariableName}</code>
            <br />
            <strong>Type:</strong> Numeric (precision: 17, scale: 0)
          </p>
          <label>
            Formula: <CopyStatus />
          </label>
          <CopyToClipboard text={dateTimeFieldEpochFormula}>
            <CodeBlock>{dateTimeFieldEpochFormula}</CodeBlock>
          </CopyToClipboard>
          <h3>Field #2:</h3>
          <p>
            <strong>Name:</strong> <code>{dateTimeEpochConvertedVariableName}</code>
            <br />
            <strong>Type:</strong> Numeric (precision: 17, scale: 0)
          </p>
          <label>
            Formula: <CopyStatus />
          </label>
          <CopyToClipboard text={dateTimeEpochConvertedFormula}>
            <CodeBlock>{dateTimeEpochConvertedFormula}</CodeBlock>
          </CopyToClipboard>
          <h3>Field #3:</h3>
          <p>
            Name: <strong>{dateTimeConvertedVariableName}</strong>
            <br />
            Type: <em>Date</em>
          </p>
          <label>
            Formula:
            <CopyStatus />
          </label>
          <CopyToClipboard text={dateTimeEpochConvertedFormulaDST}>
            <CodeBlock>{dateTimeEpochConvertedFormulaDST}</CodeBlock>
          </CopyToClipboard>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
