import React, { Component } from 'react'
import StopSearch from '../StopSearch'
import {Container, Button} from 'semantic-ui-react'
import styled from 'styled-components';

const Wrapper = styled.section`
  background: #60ac1c;
  border-radius: 25px;
  padding: 20px;
  position: relative;
  bottom: 80px;
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
    return (
      <Container >
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
            </section>
        </Wrapper>
      </Container>
    )
  }
}

export default RoutePlanner
