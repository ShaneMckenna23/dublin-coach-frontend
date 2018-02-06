import React from 'react'
import NavbarMobile from '../NavbarMobile'
import {Segment} from 'semantic-ui-react'

const MobileContainer = ({ children }) => (
  <div>
    <NavbarMobile />
    <Segment style={{ padding: '5em 0em' }} vertical>
      {children}
    </Segment>
  </div>
)

export default MobileContainer
