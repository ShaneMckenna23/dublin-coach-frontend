import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2em 0em;
`;

const Title = styled.h1`
  color: black;
  margin-top: 1em !important;
`;

const EnquiryForm = () => (
  <Wrapper>
    <Title>Enquiry Form</Title>
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder='Name' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input placeholder='Phone' />
      </Form.Field>
      <Form.TextArea label='Enquiry' placeholder='How can we help?' />
      <p>Please note that online queries can only be responded to within normal office hours.<br/> If your query is urgent please call: 087 9483973</p>
      <Button type='submit' color="orange">Submit</Button>
    </Form>
  </Wrapper>
)

export default EnquiryForm
