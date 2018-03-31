import React, { Component } from 'react'
import StopSearch from '../StopSearch'
import {Container, Button,Message} from 'semantic-ui-react'
import styled from 'styled-components';
import { compose,graphql } from 'react-apollo';
import {getPlannerState,updatePlannerState} from '../../graphql'
import BookPlanButton from '../BookPlanButton'
import ContinueButton from './continueButton'

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

const Inline = styled.div`
  display:inline-block;
  margin: 0em 1em;
`

class RoutePlanner extends Component {
  state = {
    error: false
  }

  componentDidMount(){
    const {updatePlannerState} = this.props
    try {
      updatePlannerState({
        variables: {
          state: 'Plan',
          to: '',
          from: ''
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  checkInfo = () => {
    const {getPlannerState} = this.props
    if(getPlannerState.routePlanner.to && getPlannerState.routePlanner.from ){
      return true
    }else{
      return false
    }
  }

  onClick = (history) => {
    let validInfo = this.checkInfo()
    if(validInfo){
      history.push('/new-location')
    }else{
      this.setState({
        error: true
      })

      this.timeout = setTimeout(() => {
        this.setState({ error: false })
      },5000)
    }
  }

  render () {
    const {getPlannerState, isMobile} = this.props
    const Wrapper = isMobile ? MobileWrapper : DesktopWrapper

    let Booking = null
    if (typeof getPlannerState != 'undefined'){
      Booking = getPlannerState.routePlanner.state == "Book" ? <div>Booking stuff!</div>: null
    }

    return (
      <Container fluid={this.props.isMobile}>
        <Wrapper>
        <Message color='red' hidden={!this.state.error}>Fill in all fields to continue</Message>
          <div>
            <Title>Plan Your Journey</Title>
            <BookPlanButton />
          </div>
          <section>
            <Inline>
              <StopSearch label="From" placeholder="Departure Stop" isMobile={isMobile}/>
            </Inline>
            <Inline>
              <StopSearch label="To" placeholder="Destination Stop" isMobile={isMobile}/>
            </Inline>
            <Inline>
              <ContinueButton error={this.state.error} color='orange' stlye={{float: "right"}} size="massive" onClick={this.onClick}> Continue </ContinueButton>
            </Inline>
            {Booking}
          </section>
        </Wrapper>
      </Container>
    )
  }
}

export default compose(
  graphql(updatePlannerState, { name: 'updatePlannerState' }),
  graphql(getPlannerState, { name: 'getPlannerState',
  skip: typeof window === 'undefined' })
)(RoutePlanner)

