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
const Label = styled.label`
  color: white !important;
`
const Title = styled.h2`
  color: white
`

const Info = styled.p`
  color: white
`
const EmailList = () => (
    <Wrapper>
      <Title>Join our E-Mail List</Title>
      <Info>Be the first to hear about our new services & offers:</Info>
      <Form>
        <Form.Field>
          <Label>Email</Label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <Label>Name</Label>
          <input placeholder='Name' />
        </Form.Field>
        <Button type='submit' color="orange">Submit</Button>
      </Form>
    </Wrapper>
)

export default EmailList
