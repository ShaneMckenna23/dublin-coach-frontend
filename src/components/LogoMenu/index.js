import React, { Component } from 'react'

class LogoMenu extends Component {

  constructor(){
    super()
    this.state = {
      isMenuOpen: false
    }
  }

  onClick = ()=> {
    this.setState((prevState)=> {
      return{
        isMenuOpen : !prevState.isMenuOpen
      }
    })
  }

  render () {
    return(
      <div>
        <div onClick={this.onClick}>
          <img src='/logo.png' alt="Logo Menu" style={{width:" 50px", height:"32px", marginTop:".5em", marginLeft:".5em"}} />
        </div>
      </div>
    )
  }
}

export default LogoMenu
