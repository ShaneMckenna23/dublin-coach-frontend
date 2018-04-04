import React, { Component } from 'react'
import {Button,Popup,Transition} from 'semantic-ui-react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Wrapper = styled.div`
  margin: 1em 0em;
`;




class ContinueButton extends Component {
  render() {
    const {history, onClick, visible} = this.props
    return (
      <Wrapper>
      <Transition.Group animation={'fade down'} duration={300}>
        {visible &&<Button
          color="orange"
          size="massive"
          onClick={() => onClick(history)}
          >Continue
        </Button>}
      </Transition.Group>
      </Wrapper>
    )
  }
}

export default withRouter(ContinueButton)
