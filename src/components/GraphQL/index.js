import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const GraphQL = ({ data: { stops, loading} }) => {
  if(loading){
    return(
      <div>LOADING...</div>
    );
  }
  else{
    return (
      <ul>
        {stops.map(({name}) => (
              <li>{name}</li>
            ))}
      </ul>
    );
  }
}

export default graphql(gql`
  query StopsQuery {
    stops {
      name
    }
  }
`)(GraphQL);
