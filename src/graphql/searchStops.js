import gql from 'graphql-tag'

export default gql`
query StopsQuery($inputValue: String!) {
  searchStops(filter: $inputValue){
    name
  }
}
`
