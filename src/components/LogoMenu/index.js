import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MenuLogo extends Component {
  render () {
    const isMobile = this.props.isMobile

    if (isMobile){
      return(
        <div>
          <img src='/logo.png' alt="Logo Menu" style={{width:" 50px", height:"32px", marginTop:".5em", marginLeft:".5em"}} />
        </div>
      )
    }else {
      return (
        <Link to="/" style={{paddingRight: ".5em"}}>
          <img src='/logo.png' alt="Logo Menu" style={{width:" 50px", height:"32px", marginTop:".5em"}} />
        </Link>
      )
    }
  }
}

export default MenuLogo
