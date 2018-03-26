import React from 'react'
import {Container} from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 65vh;
  margin: 2em 0em;
`;

const Title = styled.h1`
  color: black;
  margin-top: 1em !important;
`;
const NoMatch = () => (
  <Container>
    <Wrapper>
      <Title>404 - Page Not Found</Title>
    </Wrapper>
  </Container>
)

export default NoMatch
