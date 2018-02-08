import React, { Component } from 'react'
import GraphQL from '../GraphQL'

class Playground extends Component {
  render () {
    return (
      <div>
        <h1>GraphQL Test!</h1>
        <GraphQL />
        <hr/>
      </div>
    )
  }
}

export default Playground

