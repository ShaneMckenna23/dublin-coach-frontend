import React, { Component } from 'react'
import {Button,Popup} from 'semantic-ui-react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const timeoutLength = 2500

class ContinueButton extends Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render() {
    const {history, onClick} = this.props
    return (
          <Popup
            trigger={<Button
              color="orange"
              size="massive"
              onClick={() => onClick(history)}
            >
              Continue
            </Button>}
            content={`This message will self-destruct in ${timeoutLength / 1000} seconds!`}
            on="focus"
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
          />
    )
  }
}

export default withRouter(ContinueButton)
