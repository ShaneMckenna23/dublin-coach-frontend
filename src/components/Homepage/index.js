import React, { Component } from 'react'
import {
  Input
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Banner from '../Banner'
import RoutePlanner from '../RoutePlanner'
import ArticleSection from '../ArticleSection'

const Title = styled.h1`
  color: black;
`;

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
        <ArticleSection />
      </div>
    )
  }
}

export default Homepage
