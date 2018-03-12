import React, { Component } from 'react'
import StopSearch from '../StopSearch'

class RoutePlanner extends Component {
  render () {
    return (
      <div style={{backgroundColor: "#60ac1c", height: "200px"}} >
        stops

        To:
        <StopSearch/>
        From:
+       <StopSearch/>
      </div>
    )
  }
}

export default RoutePlanner
