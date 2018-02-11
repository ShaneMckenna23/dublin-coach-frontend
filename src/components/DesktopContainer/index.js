import React from 'react'
import Navbar from '../Navbar'
import {Container} from 'semantic-ui-react'
import Footer from '../Footer'

const DesktopContainer = ({ children }) => (
  <div>
    <Navbar />
    <Container style={{ padding: '4em 0em' }} vertical>
      {children}
    </Container>
    <Footer />
  </div>
)

export default DesktopContainer


