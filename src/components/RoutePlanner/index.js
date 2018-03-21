import React, { Component } from 'react'
import StopSearch from '../StopSearch'
import {Container, Button} from 'semantic-ui-react'
import styled from 'styled-components';

import BookPlanButton from '../BookPlanButton'

const DesktopWrapper = styled.section`
  background: #60ac1c;
  border-radius: 25px;
  padding: 20px;
  position: relative;
  bottom: 80px;
`

const MobileWrapper = styled.section`
  background: #60ac1c;
  padding: 20px;
  margin-left: -1em;
  margin-right: -1em;
`;

const Title = styled.h1`
  color: white;
`;

const Label = styled.h3`
  color: white;
  padding: 0px;
`
const Inline = styled.div`
  display:inline-block
`

//TODO: switch to booking mode!
class RoutePlanner extends Component {
  render () {
    const Wrapper = this.props.isMobile ? MobileWrapper : DesktopWrapper
    return (
      <Container fluid={this.props.isMobile}>
        <Wrapper>
          <Title>Plan Your Journey</Title>
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
                <Button color='orange'> Continue </Button>
              </Inline>
              <BookPlanButton />
            </section>
        </Wrapper>
      </Container>
    )
  }
}

export default RoutePlanner
