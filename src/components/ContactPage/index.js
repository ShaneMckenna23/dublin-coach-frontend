import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'

class ContactPage extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <div>
              Contact Us!
            </div>
          </Grid.Row>
        </Grid>
    )
  }
}

export default ContactPage
