import React, { Component } from 'react'
import {
  Input
} from 'semantic-ui-react'


import Banner from '../Banner'
import LoginLearn from '../LoginLearn'
import Login from '../Login'
import RoutePlanner from '../RoutePlanner'
import {Link} from 'react-router-dom'

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
        <Banner />
        <RoutePlanner />
        <Link to='/news'>News</Link>
      </div>
    )
  }
}

export default Homepage
