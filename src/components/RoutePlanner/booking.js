import React, { Component } from 'react'
import {Transition, Input} from 'semantic-ui-react'
import ContinueButton from './continueButton'

class Booking extends Component {
  render () {
    const {visible, isMobile,onClick} = this.props
    return (
      <div>
        <Transition.Group animation={'fade down'} duration={300}>
          {visible && <div>
            <Input placeholder="return" size={isMobile ? "big":"massive"}/>
            <Input placeholder="return" size={isMobile ? "big":"massive"}/>
            <Input placeholder="return" size={isMobile ? "big":"massive"}/>
            <ContinueButton
                    color='orange'
                    stlye={{float: "right"}}
                    size="massive"
                    onClick={onClick}
                    visible={true}>
                    Continue
              </ContinueButton>
            </div>}
        </Transition.Group>
      </div>
    )
  }
}

export default Booking


