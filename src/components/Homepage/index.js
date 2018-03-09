import React, { Component } from 'react'
import {
  Input
} from 'semantic-ui-react'


import HomepageHeading from '../HomepageHeading'
import LoginLearn from '../LoginLearn'
import Login from '../Login'
import RoutePlanner from '../RoutePlanner'

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
        <RoutePlanner />
      </div>
    )
  }
}

export default Homepage
