import React from 'react'
import Navbar from '../Navbar'
import {Segment} from 'semantic-ui-react'

const DesktopContainer = ({ children }) => (
  <div>
    <Navbar />
    <Segment style={{ padding: '4em 0em' }} vertical>
      {children}
    </Segment>
  </div>
)

export default DesktopContainer


