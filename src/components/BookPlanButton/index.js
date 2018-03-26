import React,{ Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'
import styled from 'styled-components'
import { graphql,compose } from 'react-apollo';
import {updatePlannerState,getPlannerState} from '../../graphql'

const Wrapper = styled.div`
  display:inline-block;
  float: right
`

class BookPlanButton extends Component {
  bookOnClick = async () => {
    const {updatePlannerState} = this.props
    try {
      await updatePlannerState({
        variables: {
          state: 'Book'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  planOnClick = async () => {
    const {updatePlannerState} = this.props
    try {
      await updatePlannerState({
        variables: {
          state: 'Plan'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  render(){
    return(
      <Wrapper>
        <Button.Group size='large'>
          <Button color={this.props.getPlannerState.routePlanner.state === "Book" ? "orange": ""} onClick={this.bookOnClick}>
            <Icon name='payment' /> Book
          </Button>
          <Button.Or />
          <Button color={this.props.getPlannerState.routePlanner.state === "Plan" ? "orange": ""} onClick={this.planOnClick}>
            <Icon name='search' /> Plan
          </Button>
        </Button.Group>
      </Wrapper>
    )
  }
}

export default compose(
    graphql(updatePlannerState, { name: 'updatePlannerState' }),
    graphql(getPlannerState, { name: 'getPlannerState',
    skip: typeof window === 'undefined' })
  )(BookPlanButton)
