import gql from 'graphql-tag'

export default gql`
  query {
    routePlanner @client {
      state
    }
  }
`
