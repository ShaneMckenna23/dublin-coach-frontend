import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react'
import styled from 'styled-components'

const Title = styled.h1`
  color: black;
  margin-top: 1em !important;
`;

const Heading = styled.h2`
  color: black;
`;

const DestinationContainer = styled.div`
  width: 100%;
`;

const DestinationBox = styled.div`
  display: inline-block;
  background-color: #15580B;
  width: 32%;
  height: 12vh;
  color: white;
  margin-bottom: .5em;
  border-radius: 15px;

  :not(:last-child) {
    margin-right: .6em;
  }

  @media only screen and (max-width: 1200px) {
    width: 30%;
  }
`;

const Explore = styled.div`
  background-color: #60AC1C;
  color: white;
  border-radius: 15px;
  margin: 1.5em 0em;
  padding: 1em;

  img {
    display: inline-block;
    width:100%;
    height:100%;
  }

  div {
    width: 50%;
    display: inline-block;
    padding: 1em;
    vertical-align: top;
    @media only screen and (max-width: 1000px) {
      width 100%
    }
  }
`;


class DestinationPage extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Grid container stackable verticalAlign='top'>
        <Title>Destinations & Events</Title>
        <Grid.Row>
          <Grid.Column width={10}>
            <Heading>Dublin Coach... at your Service</Heading>
            <p>Whatever you plan to do, we will get you there in comfort & style</p>
            <DestinationContainer>
              <DestinationBox>aaaaaaaaaaaaaaa</DestinationBox>
              <DestinationBox>HELLO</DestinationBox>
              <DestinationBox>HELLO</DestinationBox>
              <DestinationBox>HELLO</DestinationBox>
              <DestinationBox>HELLO</DestinationBox>
              <DestinationBox>HELLO</DestinationBox>
            </DestinationContainer>
            <Explore>
              <div>
                <img src="/services/cityscape.jpg"/>
              </div>
              <div>
                <h2>Explore Dublin City</h2>
                <p>
                  Hop-on hop-off over 3 days to visit all of Dublin's top attractions on one route,
                  including Dublin Zoo, Guinness Storehouse, Kilmainham Gaol, Phoenix Park, Book of
                  Kells and many more.Suitable for all the family, travel in luxury on our all-weather
                  coaches with on-board storytellers and free refreshments.
                </p>
                <Button color="orange">See what Dublin has to Offer</Button>
              </div>

            </Explore>
          </Grid.Column>
          <Grid.Column width={6}>
            Side Bar
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default DestinationPage
