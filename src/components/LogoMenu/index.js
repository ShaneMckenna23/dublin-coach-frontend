import React, { Component } from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Logo from './logo.js'

class LogoMenu extends Component {
  constructor(){
    super()
    this.state = {
      menuOpen: false
    }
  }

  onOpen = ()=>{
    this.setState({
      menuOpen: true
    })
  }

  onClose = ()=>{
    this.setState({
      menuOpen: false
    })
  }

  render () {
    return(
      <Dropdown icon={<Logo menuOpen={this.state.menuOpen}/>} onOpen={this.onOpen} onClose={this.onClose}>
      <Dropdown.Menu style={{width: "100vw", height: "100vh"}}>
        <Dropdown.Item as={Link} to='/'>Home</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} to='/destinations'>Destinations</Dropdown.Item>
        <Dropdown.Item as={Link} to='/news'>News</Dropdown.Item>
        <Dropdown.Item as={Link} to='/contact'>Contact us</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Log In</Dropdown.Item>
        <Dropdown.Item>Sign Up</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
  }
}

export default LogoMenu
