import React, { Component } from 'react'
import {Button,Popup,Transition} from 'semantic-ui-react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const timeoutLength = 2500

class ContinueButton extends Component {
  render() {
    const {history, onClick, visible} = this.props
    return (
      <Transition.Group animation={'fade down'} duration={300}>
      {visible &&<Button
        color="orange"
        size="massive"
        onClick={() => onClick(history)}
        >Continue
      </Button>}
      </Transition.Group>
    )
  }
}

export default withRouter(ContinueButton)
