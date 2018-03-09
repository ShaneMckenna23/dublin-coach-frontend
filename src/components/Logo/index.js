import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logo extends Component {
  render () {
    return (
      <Link to="/" style={{paddingRight: ".5em"}}>
        <img src='/logo.png' alt="Logo Menu" style={{width:" 50px", height:"32px", marginTop:".5em"}} />
      </Link>
    )
  }
}

export default Logo
