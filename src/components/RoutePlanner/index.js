import React, { Component } from 'react'
import StopSearch from '../StopSearch'
import {Container, Button} from 'semantic-ui-react'
import styled from 'styled-components';
import { withApollo,graphql } from 'react-apollo';
import {getPlannerState} from '../../graphql'
import BookPlanButton from '../BookPlanButton'

const DesktopWrapper = styled.section`
  background: #60ac1c;
  border-radius: 25px;
  padding: 20px;
  position: relative;
  bottom: 80px;
  border: 2px solid #488D0A;
`

const MobileWrapper = styled.section`
  background: #60ac1c;
  padding: 20px;
  margin-left: -1em;
  margin-right: -1em;
  margin-bottom: 2em;
  border: 2px solid #4c8b14;
`;

const Title = styled.h1`
  color: white;
  display:inline-block;
`;

const Label = styled.h3`
  color: white;
  padding: 0px;
`
const Inline = styled.div`
  display:inline-block;
  margin: 0em 1em;
`

//TODO: switch to booking mode!
class RoutePlanner extends Component {
  render () {
    const Wrapper = this.props.isMobile ? MobileWrapper : DesktopWrapper
    const Booking = this.props.getPlannerState.routePlanner.state == "Book" ? <div>Booking stuff!</div>: null
    return (
      <Container fluid={this.props.isMobile}>
        <Wrapper>
          <div>
          <Title>Plan Your Journey</Title>
          <BookPlanButton />
          </div>
            <section>
              <Inline>
                <Label>To:</Label>
                <StopSearch/>
              </Inline>
              <Inline>
                <Label>From:</Label>
                <StopSearch/>
              </Inline>
              <Inline>
                <Button color='orange' stlye={{float: "right"}} size="massive"> Continue </Button>
              </Inline>
              {Booking}
            </section>
        </Wrapper>
      </Container>
    )
  }
}

export default graphql(getPlannerState, { name: 'getPlannerState',
skip: typeof window === 'undefined' })(RoutePlanner)

