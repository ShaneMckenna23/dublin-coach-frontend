import React, { Component } from 'react'
import StopSearch from '../StopSearch'

class RoutePlanner extends Component {
  render () {
    return (
      <div style={{backgroundColor: "green"}}>
        <StopSearch/>
        <StopSearch/>
      </div>
    )
  }
}

export default RoutePlanner
