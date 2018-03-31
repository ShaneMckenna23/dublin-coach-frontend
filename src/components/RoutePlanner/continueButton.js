import React, { Component } from 'react'
import {Button,Popup} from 'semantic-ui-react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const timeoutLength = 2500

class ContinueButton extends Component {
  render() {
    const {history, onClick} = this.props
    return (
      <Button
        color="orange"
        size="massive"
        onClick={() => onClick(history)}
        >Continue
      </Button>
    )
  }
}

export default withRouter(ContinueButton)
