import React,{ Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class BookPlanButton extends Component {

  constructor (props) {
    super(props)
    this.state = {
      bookActive: false
    }
  }

  bookOnClick = ()=> {
    this.setState((prevState)=>{
      return ({
        bookActive: !prevState.bookActive
      })
    })
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
      <Button.Group size='large'>
        <Button positive={this.state.bookActive} onClick={this.bookOnClick}>
          <Icon name='payment' /> Book
        </Button>
        <Button.Or />
        <Button positive={!this.state.bookActive} onClick={this.planOnClick}>
          <Icon name='search' /> Plan
        </Button>
      </Button.Group>
    )
  }
}

export default BookPlanButton
