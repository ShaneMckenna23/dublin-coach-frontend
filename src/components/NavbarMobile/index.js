import React, { Component } from 'react'
import {
  Container,
  Menu,
  Button
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import LogoMenu from '../LogoMenu'

class NavbarMobile extends Component {
  render () {
    return (
      <Menu
        fixed={'top'}
        size='small'
      >
      <Container>
        <LogoMenu isMobile />
      </Container>
    </Menu>
    )
  }
}

export default NavbarMobile
