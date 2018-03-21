import React from 'react'
import NavbarMobile from '../NavbarMobile'
import {Container} from 'semantic-ui-react'
import Footer from '../Footer'

const MobileContainer = ({ children }) => (
  <div>
    <NavbarMobile />
    <section style={{ padding: '1.6em 0em' }} />
      {children}
      <Footer />
  </div>
)

export default MobileContainer
