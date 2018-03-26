import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #60ac1c;
  border-radius: 25px;
  padding: 20px;
  margin: .2em;
  margin-bottom: 2em;
`

const Title = styled.h2`
  color: white
`
const Info = styled.p`
  color: white
`

const EmailList = () => (
  <Wrapper>
    <Title>Recruitment</Title>
    <Info>See our current Recruitment Opportunities on our recruitment page</Info>
  </Wrapper>
)

export default EmailList
