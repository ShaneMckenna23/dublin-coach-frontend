import React from 'react'
import Navbar from '../Navbar'
import {Segment} from 'semantic-ui-react'
import Footer from '../Footer'

const DesktopContainer = ({ children }) => (
  <div>
    <Navbar />
    <Segment style={{ padding: '4em 0em' }} vertical>
      {children}
    </Segment>
    <Footer />
  </div>
)

export default DesktopContainer


