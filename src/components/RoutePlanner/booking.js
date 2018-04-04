import React, { Component } from 'react'
import {Transition, Input, Form} from 'semantic-ui-react'
import ContinueButton from './continueButton'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 15px;
  margin-top: 10px;
`;

const Inline = styled.div`
  display:inline-block;
  margin: 0em 1em;
`

class Booking extends Component {
  render () {
    const {visible, isMobile,onClick} = this.props
    const padding = isMobile ? null:<div style={{padding: "0px 15px"}}></div>
    return (
      <Wrapper>
        <Transition.Group animation={'fade down'} duration={300}>
          {visible && <div>
            <Form>
              <Form.Group stackable>
                <Form.Field label="Ticket Type:" control='select'>
                  <option value='Single'>Single</option>
                  <option value='Return'>Return</option>
                  <option value='10 Journey Student'>One-Way</option>
                  <option value='10 Journey Adult'>One-Way</option>
                </Form.Field>
                <Form.Field>
                  <label>Date:</label>
                  <input placeholder='dd-mm' />
                </Form.Field>
                {padding}
                <Form.Field>
                  <label>No of Adults:</label>
                  <input placeholder='No of Adults' />
                </Form.Field>
                <Form.Field>
                  <label>No of Children:</label>
                  <input placeholder='No of Children' />
                </Form.Field>
              </Form.Group>
            </Form>
            <ContinueButton
                    color='orange'
                    size="massive"
                    onClick={onClick}
                    visible={true}>
                    Continue
              </ContinueButton>
            </div>}
        </Transition.Group>
      </Wrapper>
    )
  }
}

export default Booking


