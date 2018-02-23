import React, { Component } from 'react'
import {
  Grid,
  Input
} from 'semantic-ui-react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import HomepageHeading from '../HomepageHeading'
import LoginLearn from '../LoginLearn'



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render () {
    return (
      <div>
        <HomepageHeading />

        <Input placeholder='From' />
        <Input placeholder='To' />
        <SingleDatePicker
          stlye={{borderBottomLeftRadius:"10px" }}
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        />
        2 stops and calender
        Search page has stop locations
      </div>
    )
  }
}

export default Homepage
