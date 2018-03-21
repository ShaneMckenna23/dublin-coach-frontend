import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import ArticleSection from '../ArticleSection'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding-top: 2em;
  padding-bottom: 2em
`

class NewsPage extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Wrapper>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <ArticleSection count={10} />
          </Grid.Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default NewsPage
