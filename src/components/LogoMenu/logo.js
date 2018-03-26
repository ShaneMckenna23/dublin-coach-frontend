import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class Logo extends Component {
  render(){
    const arrow = this.props.menuOpen ? <Icon color="grey" name='triangle up' size='big' style={{verticalAlign: "top"}}/> :
    <Icon color="grey" name='triangle down' size='big' style={{verticalAlign: "top", marginTop: "5px"}}/>
    return(
      <div style={{marginBottom:".5em",marginTop:"-.4em",marginLeft:".5em"}}>
        <img src='/logo.png' alt="Logo Menu" style={{width:"50px", height:"32px"}}/>
        {arrow}
      </div>
    )
  }
}

export default Logo
