import { CodeBlock } from 'components/CodeBlock/CodeBlock';
import { CopyStatus } from '../components/CopyStatus/CopyStatus';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DebounceInput } from 'react-debounce-input';
import { Layout } from '../components/Layout/Layout';
import React from 'react';
import SelectTimezone from '../components/SelectTimezone/SelectTimezone';

const Input = () => {
  return <input />;
};

class EinsteinAnalyticsConvertTimezone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTimeFieldName: `CreatedDate`,
      dateTimeFieldEpochFormula: `date_to_epoch(toDate(CreatedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))`,
      dateTimeEpochVariableName: `CreatedDate_epoch`,
      dateTimeEpochConvertedVariableName: `CreatedDate_GMT_epoch`,
      dateTimeConvertedVariableName: `CreatedDate_GMT`,
      dateTimeEpochConvertedFormula: `CreatedDate_epoch`,
      dateTimeConvertedVariableFormulaNoDST: `/* Awaiting Input */`,
      dateTimeEpochConvertedFormulaDST: `/* Awaiting Input */`,
      startYear: new Date().getFullYear() - 10, // document.getElementById(`start_year`).value
      endYear: new Date().getFullYear(), // document.getElementById(`end_year`).value
      timezoneRegion: ``, // timezoneEl.options[timezoneEl.selectedIndex].getAttribute(`data-timezone-region`)
      timezoneNicename: `UTC`,
      isDst: false, // timezoneEl.options[timezoneEl.selectedIndex].getAttribute(`data-dst`)
      supportDst: true, // support DST by default
      offset: 0,
      modifier: '+', // if offset is negative, this becomes a minus sign
    };

    this.dateTimeFieldName = React.createRef();
    this.dateTimeEpochVariableName = React.createRef();
    this.startYear = React.createRef();
    this.endYear = React.createRef();

    this.handleDateTimeFieldNameChange = this.handleDateTimeFieldNameChange.bind(this);
    this.handleTimezoneChange = this.handleTimezoneChange.bind(this);
    this.handleDateRangeChange = this.handleDateRangeChange.bind(this);
  }

  updateDSTFormula() {
    if (this.state.isDst === true) {
      const postData = {
        start_year: this.state.startYear,
        end_year: this.state.endYear,
        epoch_variable_name: this.state.dateTimeEpochVariableName,
        epoch_converted_variable_name: this.state.dateTimeEpochConvertedVariableName,
        timezone_name: this.state.timezoneNicename,
        timezone_region: this.state.timezoneRegion,
      };

      let body = Object.keys(postData)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(postData[k]))
        .join('&');

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      };

      fetch(`https://tools.missionmike.dev/einstein-analytics-convert-timezone/`, requestOptions)
        .then((response) => response.json()) // parse JSON from request
        .then((data) => {
          if (data.formula) {
            this.setState({ dateTimeEpochConvertedFormulaDST: data.formula });
          }
        });
    }
  }

  updateVariables() {
    let dateTimeFieldName = this.state.dateTimeFieldName;
    let dateTimeFieldEpochFormula = `date_to_epoch(toDate(${dateTimeFieldName}, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"))`;
    let dateTimeEpochVariableName = dateTimeFieldName + '_epoch';

    // e.g. CreatedDate_epoch - 28000
    let dateTimeEpochConvertedFormula = `${dateTimeEpochVariableName} ${
      this.state.modifier
    } ${Math.abs(this.state.offset * 3600)}`;

    // e.g. CreatedDate_AmericaLosAngeles_epoch
    let dateTimeEpochConvertedVariableName = `${dateTimeFieldName}_${this.state.timezoneNicename.replace(
      /[^a-zA-Z0-9]+/g,
      ''
    )}_epoch`;

    // e.g. CreatedDate_AmericaLosAngeles
    let dateTimeConvertedVariableName = `${dateTimeFieldName}_${this.state.timezoneNicename.replace(
      /[^a-zA-Z0-9]+/g,
      ''
    )}`;

    let dateTimeConvertedVariableFormulaNoDST = `toDate(${dateTimeFieldEpochFormula} ${
      this.state.modifier
    } ${Math.abs(this.state.offset * 3600)})`;

    this.setState(
      {
        dateTimeFieldEpochFormula,
        dateTimeEpochVariableName,
        dateTimeEpochConvertedFormula,
        dateTimeConvertedVariableName,
        dateTimeEpochConvertedVariableName,
        dateTimeConvertedVariableFormulaNoDST,
      },
      this.updateDSTFormula
    );
  }

  handleDateTimeFieldNameChange() {
    this.setState(
      {
        dateTimeFieldName: this.dateTimeFieldName.current.value,
      },
      this.updateVariables
    );
  }

  handleTimezoneChange(evt) {
    if (evt.target) {
      let select = evt.target,
        // e.g. America/Los_Angeles
        timezoneNicename = select.options[select.selectedIndex].getAttribute('data-timezone-id'),
        timezoneRegion = select.options[select.selectedIndex].getAttribute('data-timezone-region');

      // -12 through +14
      let offset = parseInt(select.value, 10);

      // if offset is a negative number, modifier is for subtraction, otherwise addition
      let modifier = offset < 0 ? `-` : `+`;

      // does this timezone support DST (Daylight Savings Time)?
      let isDst =
        parseInt(select.options[select.selectedIndex].getAttribute('data-dst'), 10) === 1
          ? true
          : false;

      this.setState(
        {
          timezoneNicename,
          timezoneRegion,
          offset,
          modifier,
          isDst,
        },
        this.updateVariables
      );
    }
  }

  handleDateRangeChange() {
    let startYear = this.startYear.current.value,
      endYear = this.endYear.current.value;

    this.setState(
      {
        startYear,
        endYear,
      },
      this.updateDSTFormula
    );
  }

  render() {
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
          ref={this.dateTimeFieldName}
          placeholder="CreatedDate"
          defaultValue="CreatedDate"
          onChange={this.handleDateTimeFieldNameChange}
          aria-label="DateTime field name"
        />
        <p>Select your destination timezone:</p>
        <SelectTimezone onChange={this.handleTimezoneChange} />

        <div
          className="mt-4"
          style={this.state.isDst === false ? { display: 'none' } : { display: 'block' }}
        >
          <input
            type="checkbox"
            className="form-checkbox float-left mr-2 h-5 w-5 text-pink-600"
            onChange={() => this.setState({ supportDst: !this.state.supportDst })}
            defaultChecked={this.state.supportDst}
          />
          <span className="ml-2 -mt-1 block text-gray-700">
            Support Daylight Savings Time (DST)
          </span>
        </div>
        <div className={`${this.state.isDst === false ? `hidden` : `block`}`}>
          <p>
            <em>
              The timezone you selected supports Daylight Savings Time (DST).
              {this.state.supportDst === true
                ? ` For to-the-hour accuracy, select a range of years to support in
              your final formula. Years outside of this range will not take
              Daylight Savings Time (DST) into account.`
                : ` If you would like to account for DST in your final formula, check the box above.`}
            </em>
          </p>
          <div
            className={`${
              this.state.supportDst === false ? `hidden` : `flex`
            } flex-grow flex-row gap-4`}
          >
            <div className="flex flex-grow flex-col">
              <label htmlFor="start_year">Start Year:</label>
              <DebounceInput
                element={Input}
                type="number"
                value={this.state.startYear}
                name="start_year"
                inputRef={this.startYear}
                debounceTimeout={1000}
                onChange={this.handleDateRangeChange}
              />
            </div>
            <div className="flex flex-grow flex-col">
              <label htmlFor="end_year">End Year:</label>
              <DebounceInput
                element={Input}
                type="number"
                value={this.state.endYear}
                name="end_year"
                inputRef={this.endYear}
                debounceTimeout={1000}
                onChange={this.handleDateRangeChange}
              />
            </div>
          </div>
        </div>
        {/**
        Hide Step #2 if there is no timezone change; SF stores values in GMT/UTC by default, so if the 
        selected timezone is UTC, there's no point in moving forward...
         */}
        <div className={this.state.timezoneNicename === 'UTC' ? `hidden` : `block max-w-full`}>
          <h2>
            Step 2: Create{' '}
            {this.state.isDst && this.state.supportDst ? `These Fields` : `This Field`} in Dataflow!
          </h2>
          <p>
            In the Dataflow editor, add the following{' '}
            <a
              href="https://help.salesforce.com/articleView?id=bi_integrate_saql_transformation.htm&type=5"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              computeExpression
              {this.state.isDst && this.state.supportDst ? `s` : ``}
            </a>
            .
          </p>
          <div
            className={
              this.state.isDst === false || this.state.supportDst === false
                ? `block max-w-full`
                : `hidden`
            }
          >
            <h3>Field:</h3>
            <p>
              Name:{' '}
              <strong className="text-blue-900">{this.state.dateTimeConvertedVariableName}</strong>
              <br />
              Type: <em>Numeric (precision: 17, scale: 0)</em>
            </p>
            <label>
              Click below to copy formula for {this.state.dateTimeConvertedVariableName}:{' '}
              <CopyStatus copied={this.state.dateTimeConvertedVariableNameCopied} copyText="none" />
            </label>
            <CopyToClipboard
              text={this.state.dateTimeConvertedVariableFormulaNoDST}
              onCopy={() => this.setState({ dateTimeConvertedVariableNameCopied: true })}
            >
              <CodeBlock>{this.state.dateTimeConvertedVariableFormulaNoDST}</CodeBlock>
            </CopyToClipboard>
          </div>
          <div
            className={
              this.state.isDst === true && this.state.supportDst === true
                ? `block max-w-full`
                : `hidden`
            }
          >
            <h3>Field #1:</h3>
            <p>
              Name:{' '}
              <strong className="text-blue-900">{this.state.dateTimeEpochVariableName}</strong>
              <br />
              Type: <em>Numeric (precision: 17, scale: 0)</em>
            </p>
            <label>
              Click below to copy formula for {this.state.dateTimeEpochVariableName}:{' '}
              <CopyStatus copied={this.state.dateTimeEpochVariableNameCopied} copyText="none" />
            </label>
            <CopyToClipboard
              text={this.state.dateTimeFieldEpochFormula}
              onCopy={() => this.setState({ dateTimeEpochVariableNameCopied: true })}
            >
              <CodeBlock>{this.state.dateTimeFieldEpochFormula}</CodeBlock>
            </CopyToClipboard>
            <h3>Field #2:</h3>
            <p>
              Name:{' '}
              <strong className="text-blue-900">
                {this.state.dateTimeEpochConvertedVariableName}
              </strong>
              <br />
              Type: <em>Numeric (precision: 17, scale: 0)</em>
            </p>
            <label>
              <CopyStatus
                copied={this.state.dateTimeFieldEpochFormulaCopied}
                copyText={`Click below to copy formula for ${this.state.dateTimeEpochConvertedVariableName}`}
              />
            </label>
            <CopyToClipboard
              text={this.state.dateTimeEpochConvertedFormula}
              onCopy={() => this.setState({ dateTimeFieldEpochFormulaCopied: true })}
            >
              <CodeBlock>{this.state.dateTimeEpochConvertedFormula}</CodeBlock>
            </CopyToClipboard>
            <h3>Field #3:</h3>
            <p>
              Name:{' '}
              <strong className="text-blue-900">{this.state.dateTimeConvertedVariableName}</strong>
              <br />
              Type: <em>Date</em>
            </p>
            <label>
              <CopyStatus
                copied={this.state.dateTimeConvertedVariableNameCopied}
                copyText={`Click below to copy formula for ${this.state.dateTimeConvertedVariableName}`}
              />
            </label>
            <CopyToClipboard
              text={this.state.dateTimeEpochConvertedFormulaDST}
              onCopy={() => this.setState({ dateTimeConvertedVariableNameCopied: true })}
            >
              <CodeBlock> {this.state.dateTimeEpochConvertedFormulaDST}</CodeBlock>
            </CopyToClipboard>
          </div>
        </div>
      </Layout>
    );
  }
}

export default EinsteinAnalyticsConvertTimezone;
