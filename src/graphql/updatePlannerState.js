import gql from 'graphql-tag'

export default gql`
  mutation updatePlannerState($state: String!) {
    updatePlannerState(state: $state) @client
  }
`
