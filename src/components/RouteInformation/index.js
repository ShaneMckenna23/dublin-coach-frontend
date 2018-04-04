import React, { Component } from 'react'
import ChunkLoader from '../ChunkLoader'
import { withRouter } from 'react-router-dom'

class RouteInformation extends Component {
  constructor(props) {
    super(props);
 }

  componentDidMount () {
    setTimeout(()=> {
      this.redirect();
  }, 2000)
  }

  redirect = ()=>{
    const {history} = this.props
    history.push('/')
  }

  render () {
    return (
      <div>
        <ChunkLoader />
      </div>
    )
  }
}

export default withRouter(RouteInformation)
