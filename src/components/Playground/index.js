import React, { Component } from 'react'
import GraphQL from '../GraphQL'
import StopSearch from '../StopSearch'

class Playground extends Component {
  render () {
    return (
      <div>
        <h1>GraphQL Test!</h1>
        <GraphQL />
        <hr/>
        <h1>GraphQL StopSearch</h1>
        <StopSearch />
        <hr/>
      </div>
    )
  }
}

export default Playground

