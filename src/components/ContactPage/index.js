import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import styled from 'styled-components'
import EnquiryForm from '../EnquiryForm'
import EmailList from '../EmailList'
import Recruitment from '../Recruitment'

const Title = styled.h1`
  color: black;
  margin-top: 1em !important;
`;

const Info = styled.div`
  padding-bottom: 8px;
  display: inline-block;
  vertical-align: top;
  width: 60%
`

const ContactBox = styled.div`
  display: inline-block;
  width: 50%;

  @media only screen and (max-width: 1200px) {
    width 100%
  }
`

const AddressBox = styled.div`
  display: inline-block;
  width: 50%;
  vertical-Align: top;

  @media only screen and (max-width: 1200px) {
    width 100%
  }
`

const Label = styled.label`
  font-weight: bold;
  padding: 0 5px 8px 0;
  margin: 0;
  width: 40%;
  display: inline-block;
  vertical-align: top;
`

class ContactPage extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Grid container stackable verticalAlign='top'>
        <Title>Contact Us</Title>
        <Grid.Row>
          <Grid.Column width={10}>
            <ContactBox>
              <Label>Phone:</Label>
              <Info>+353 (0)1 465 9972</Info>
              <Label>Email:</Label>
              <Info>info@dublincoach.ie</Info>
              <Label>Office Hours:</Label>
              <Info>9am - 5pm Mon - Fri</Info>
            </ContactBox>
            <AddressBox>
              <Label>Postal Address:</Label>
              <p>
                Dublin Coach<br/>
                Unit 20, Western Ind. Estate, Naas Road,<br/>
                Dublin 12, D12AW0V, IRELAND
              </p>
            </AddressBox>
            <EnquiryForm/>
          </Grid.Column>
          <Grid.Column width={6}>
            <EmailList />
            <Recruitment />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ContactPage
