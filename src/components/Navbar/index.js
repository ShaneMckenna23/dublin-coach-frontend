import React, { Component } from 'react'
import {
  Container,
  Menu,
  Button
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import SignUp from '../SignUp'
import Login from '../Login'


class Navbar extends Component {
  render () {
    return (
      <Menu
        fixed={'top'}
        size='large'
      >
      <Container>
        <Logo />
        <Menu.Item as={Link} to='/news'>News</Menu.Item>
        <Menu.Item as={Link}to='/contact' >Contact us</Menu.Item>
        <Menu.Item position='right'>
          <Login />
          <SignUp />
        </Menu.Item>
      </Container>
    </Menu>
    )
  }
}

export default Navbar
