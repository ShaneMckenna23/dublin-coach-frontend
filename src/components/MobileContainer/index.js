import React from 'react'
import NavbarMobile from '../NavbarMobile'
import {Container} from 'semantic-ui-react'

const MobileContainer = ({ children }) => (
  <div>
    <NavbarMobile />
    <section style={{ padding: '1.6em 0em' }} />
      {children}
  </div>
)

export default MobileContainer
