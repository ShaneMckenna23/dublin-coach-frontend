import React, { Component } from 'react'
import {
  Input
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Banner from '../Banner'
import RoutePlanner from '../RoutePlanner'
import ArticleSection from '../ArticleSection'
import ServiceSection from '../ServiceSection'

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

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    const {isMobile} = this.props

    return (
      <div>
        <Banner isMobile={isMobile} />
        <RoutePlanner isMobile={isMobile} />
        <ArticleSection count={2}/>
        <ServiceSection />
      </div>
    )
  }
}

export default Homepage
