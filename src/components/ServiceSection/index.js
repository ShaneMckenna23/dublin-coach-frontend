import React, {Component} from 'react';
import styled from 'styled-components';
import {Card, Image, Container} from 'semantic-ui-react'

const Wrapper = styled.section`
  padding-top: 3em;
  padding-bottom: 3em;
`;

const Title = styled.h1`
  color: black;
`;

class ServiceSection extends Component {
  render () {
    return (
      <Container>
        <Wrapper>
          <Title>Services</Title>
          <Card.Group centered itemsPerRow={4} doubling>
            <Card>
              <Image src='/services/student.jpg' />
              <Card.Content>
                <Card.Header>
                  Student Travel
                </Card.Header>
                <Card.Description>
                  See our Student Travel Services with special fares and multi-journey tickets
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image src='/services/racing.jpg' />
              <Card.Content>
                <Card.Header>
                  Go Racing
                </Card.Header>
                <Card.Description>
                  We service the Curragh Racecourse every race day, with extra services for major events
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image src='/services/concert.jpg' />
              <Card.Content>
                <Card.Header>
                  Concert Days
                </Card.Header>
                <Card.Description>
                  Going to a concert in Croke Park or the O2? Our services will get you to Dublin in comfort & style
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image src='/services/gps.jpg' />
              <Card.Content>
                <Card.Header>
                  Live GPS Tracking
                </Card.Header>
                <Card.Description>
                  See where the next bus with our new Progressive Web Application
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Wrapper>
      </Container>
    )
  }
}

export default ServiceSection

