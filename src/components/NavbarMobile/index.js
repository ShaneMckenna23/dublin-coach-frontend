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
        <LogoMenu />
    </Menu>
    )
  }
}

export default NavbarMobile
