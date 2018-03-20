import React from 'react'
import Navbar from '../Navbar'
import {Container} from 'semantic-ui-react'
import Footer from '../Footer'

const DesktopContainer = ({ children }) => (
  <div>
    <Navbar />
        <section style={{'padding': '1.8em 0em'}}/>
        {children}
    <Footer />
  </div>
)

export default DesktopContainer


