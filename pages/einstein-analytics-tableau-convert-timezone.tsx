import { Col, Container, FormControl, Row } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';

import { CodeBlock } from 'components/CodeBlock/CodeBlock';
import { CopyStatus } from 'components/CopyStatus/CopyStatus';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Layout } from 'components/Layout/Layout';
import SelectTimezone from 'components/SelectTimezone/SelectTimezone';

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
  const [supportDst, setSupportDst] = useState(false);
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
    startYear,
    timezoneNicename,
    timezoneRegion,
  ]);

  useEffect(() => {
    if (
      isDst &&
      startYear > 1918 &&
      startYear < new Date().getFullYear() &&
      endYear > 1918 &&
      endYear < new Date().getFullYear() + 10 &&
      startYear <= endYear
    )
      updateDSTFormula();
  }, [isDst, startYear, endYear, updateDSTFormula]);

  const handleTimezoneChange = (evt) => {
    if (!evt?.target) return;

    const targetOptions = evt.target.options,
      selectedIndex = evt.target.selectedIndex,
      newOffset = parseInt(evt.target.value, 10);

    setTimezoneNicename(targetOptions[selectedIndex].getAttribute('data-timezone-id')); // e.g. America/Los_Angeles
    setTimezoneRegion(targetOptions[selectedIndex].getAttribute('data-timezone-region'));

    setOffset(newOffset); // -12 through +14
    setModifier(newOffset < 0 ? `-` : `+`);
    setIsDst(parseInt(targetOptions[selectedIndex].getAttribute('data-dst'), 10) === 1);
  };

  const updateCopyStatus = (evt) => {
    // console.log(evt?.target);
  };

  return (
    <Layout title="Convert Timezone 🌎⏲ in Tableau (formerly Einstein Analytics)" isProse={true}>
      <Row>
        <h1 className="mb-0">
          Convert Timezone{' '}
          <span role="img" aria-label="Globe Icon">
            🌎
          </span>{' '}
          <span role="img" aria-label="Timer Icon">
            ⏲
          </span>{' '}
          in Tableau
        </h1>
        <h2>Step 1: Choose Field and Destination Timezone</h2>
      </Row>
      <Row>
        <Col>
          <p>
            Enter the <code>DateTime</code> field name:
          </p>
          <FormControl
            type="text"
            name="date_field_name"
            id="date_field_name"
            placeholder="CreatedDate"
            value={dateTimeFieldName}
            onChange={(e) => setDateTimeFieldName(e.target.value)}
            aria-label="DateTime field name"
          />
        </Col>
        <Col>
          <p>Select destination timezone:</p>
          <SelectTimezone onChange={handleTimezoneChange} />
        </Col>
      </Row>
      <Row style={{ display: isDst ? 'block' : 'none' }}>
        <Col>
          <p style={{ marginTop: '1rem' }}>
            <label>
              <input
                type="checkbox"
                onChange={() => setSupportDst(!supportDst)}
                defaultChecked={supportDst}
              />{' '}
              Support Daylight Savings Time (DST)
            </label>
          </p>
        </Col>
      </Row>
      <Row style={{ display: isDst && supportDst ? 'block' : 'none' }}>
        <p>
          <em>
            For accuracy to the hour, select a range of years to support in your final formula.
            Years outside of this range will <strong>not</strong> take Daylight Savings Time (DST)
            into account.
          </em>
        </p>
      </Row>
      <Row style={{ display: supportDst ? 'flex' : 'none' }}>
        <Col>
          <label htmlFor="start_year">Start Year:</label>
          <FormControl
            type="number"
            value={startYear}
            name="start_year"
            onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
          />
        </Col>
        <Col>
          <label htmlFor="end_year">End Year:</label>
          <FormControl
            type="number"
            value={endYear}
            name="end_year"
            onChange={(e) => setEndYear(parseInt(e.target.value, 10))}
          />
        </Col>
      </Row>
      {/**
      Hide Step #2 if there is no timezone change; SF stores values in GMT/UTC by default, so if the 
      selected timezone is UTC, there's no point in moving forward...
       */}
      <div style={{ display: timezoneNicename === 'UTC' ? `none` : `block` }}>
        <h2>Step 2: Create {isDst && supportDst ? `These Fields` : `This Field`} in Dataflow</h2>
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
        <Container style={{ display: !isDst || !supportDst ? 'block' : 'none' }}>
          <Row className="bg-light p-3">
            <p>
              <strong>Name:</strong>{' '}
              <code>
                <strong>{dateTimeConvertedVariableName}</strong>
              </code>
              <br />
              <strong>Type:</strong> Numeric (precision: 17, scale: 0)
            </p>
            <CodeBlock copyOnClick>{dateTimeConvertedVariableFormulaNoDST}</CodeBlock>
          </Row>
        </Container>
        <Container style={{ display: isDst && supportDst ? 'block' : 'none' }}>
          <Row className="bg-light p-3">
            <h3>Field #1</h3>
            <p>
              <strong>Name:</strong> <code>{dateTimeEpochVariableName}</code>
              <br />
              <strong>Type:</strong> Numeric (precision: 17, scale: 0)
            </p>
            <CodeBlock copyOnClick>{dateTimeFieldEpochFormula}</CodeBlock>
          </Row>
          <Row className="bg-light mt-4 p-3">
            <h3>Field #2:</h3>
            <p>
              <strong>Name:</strong> <code>{dateTimeEpochConvertedVariableName}</code>
              <br />
              <strong>Type:</strong> Numeric (precision: 17, scale: 0)
            </p>
            <CodeBlock copyOnClick>{dateTimeEpochConvertedFormula}</CodeBlock>
          </Row>
          <Row className="bg-light mt-4 p-3">
            <h3>Field #3:</h3>
            <p>
              <strong>Name:</strong> <code>{dateTimeConvertedVariableName}</code>
              <br />
              <strong>Type:</strong> Date
            </p>
            <CodeBlock copyOnClick>{dateTimeEpochConvertedFormulaDST}</CodeBlock>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Page;
