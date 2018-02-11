import React from 'react'
import NavbarMobile from '../NavbarMobile'
import {Container} from 'semantic-ui-react'

const MobileContainer = ({ children }) => (
  <div>
    <NavbarMobile />
    <Container style={{ padding: '5em 0em' }} vertical>
      {children}
    </Container>
  </div>
)

export default MobileContainer
