import React, { Component } from 'react'
import {Loader} from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 80vh;
  padding-top: 25em;
`

const ChunkLoader = () => (
  <Wrapper>
    <Loader active inline='centered' />
  </Wrapper>
)
export default ChunkLoader
