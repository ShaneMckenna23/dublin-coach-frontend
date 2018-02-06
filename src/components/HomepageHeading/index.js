import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

class HomepageHeading extends Component {
  render () {
    const isMobile = this.props.isMobile

    return (
      <Container text>
        <Header
          as='h1'
          content='The Green Bus Company'
          inverted
          style={{
            fontSize: isMobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: isMobile ? '1.5em' : '3em',
            color: 'black'
          }}
        />
        <Header
          as='h2'
          content='We go nowhere on time'
          inverted
          style={{
            fontSize: isMobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: isMobile ? '0.5em' : '1.5em',
            color: 'black'
          }}
        />
        <Button primary size='huge'>
          Pay Us
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

export default HomepageHeading
