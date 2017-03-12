import 'babel-polyfill'; // For IE 11

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectBox from './SelectBox';

const options = [
  { displayText: 'Any', value: 'null' },
  { displayText: 'Fiat', value: 'fiat' },
  { displayText: 'Subaru', value: 'subaru' },
  { displayText: 'BMW', value: 'bmw' },
  { displayText: 'Tesla', value: 'tesla' }
];


class Form extends Component {

  constructor() {
    super();
    this.reportChange = this.reportChange.bind(this);
  }

  reportChange(v) {
    console.log(v);
  }

  render() {
    return (
      <form ref={r => this.form = r}>
        <h3>Example</h3>
        <div className="row">

          <div className="colQuarter">
            <SelectBox
              prefix="Make"
              name="make"
              selectedValue="mazda"
              options={[
                { displayText: 'Any', value: 'null' },
                { displayText: 'Oldsmobile', value: 'oldsmobile' },
                { displayText: 'Ford', value: 'ford' },
                { displayText: 'Mazda', value: 'mazda' },
                { displayText: 'Toyota', value: 'toyota' },
                { displayText: 'AMC', value: 'amc' },
                { displayText: 'Delorean', value: 'delorean' },
                { displayText: 'Fiat', value: 'fiat' },
                { displayText: 'Subaru', value: 'subaru' },
                { displayText: 'BMW', value: 'bmw' },
                { displayText: 'Tesla', value: 'tesla' }
              ]}
              onChange={this.reportChange}
              onSubmit={() => { this.form.submit(); }}
            />
          </div>

          <div className="colQuarter">
            <SelectBox
              prefix="Make"
              name="make"
              selectedValue="fiat"
              options={options}
              onChange={this.reportChange}
              onSubmit={() => { this.form.submit(); }}
            />
          </div>

          <div className="colQuarter">
            <SelectBox
              prefix="Make"
              name="make"
              selectedValue="fiat"
              options={options}
              onChange={this.reportChange}
              onSubmit={() => { this.form.submit(); }}
            />
          </div>

          <div className="colQuarter">
            <SelectBox
              prefix="Make"
              name="make"
              selectedValue="fiat"
              options={options}
              onChange={this.reportChange}
              onSubmit={() => { this.form.submit(); }}
            />
          </div>

        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
