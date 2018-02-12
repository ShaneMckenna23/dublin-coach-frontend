import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import NewsItemContainer from '../NewsItemContainer'

class NewsPage extends Component {
  render () {
    return (
      <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <div>
              <h1>Latest Updates & Upcoming Events</h1>
              <NewsItemContainer />
            </div>
          </Grid.Row>
        </Grid>
    )
  }
}

export default NewsPage
