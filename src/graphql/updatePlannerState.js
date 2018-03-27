import gql from 'graphql-tag'

export default gql`
  mutation updatePlannerState($state: String, $to: String, $from: String) {
    updatePlannerState(state: $state, to: $to, from: $from) @client
  }
`
