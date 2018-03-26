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
  constructor (props) {
    super(props)
    this.state = {
      bookActive: false
    }
  }

  bookOnClick = async () => {
    const {updatePlannerState} = this.props
    try {
      await updatePlannerState({
        variables: {
          state: 'Book'
        }
      })
      console.log(this.props.getPlannerState.routePlanner.state)
      console.log("Data:", this.props.data)
    } catch (error) {
      console.log(error)
    }
  }

  planOnClick = ()=> {
    this.setState((prevState)=>{
      return ({
        bookActive: false
      })
    })
  }

  render(){
    return(
      <Wrapper>
        <Button.Group size='large'>
          <Button color={this.state.bookActive ? "orange": ""} onClick={this.bookOnClick}>
            <Icon name='payment' /> Book
          </Button>
          <Button.Or />
          <Button color={!this.state.bookActive ? "orange": ""} onClick={this.planOnClick}>
            <Icon name='search' /> Plan
          </Button>
        </Button.Group>
      </Wrapper>
    )
  }
}

export default compose(
    graphql(updatePlannerState, { name: 'updatePlannerState' }),
    graphql(getPlannerState, { name: 'getPlannerState' })
  )(BookPlanButton)
