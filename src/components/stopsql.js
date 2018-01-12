import React from 'react';
import { graphql } from 'react-apollo';
import allStops from 'src/graphql/queries/all_stops.gql';

@graphql(allStops)
export default class GraphQLStops extends React.PureComponent {
  render() {
    const { data } = this.props;

    const stops = data.stops;

    const isLoading = data.loading ? 'yes' : 'nope';
    return (
      <div>
        <h2>Stops: <em>{data.loading ? 'Loading' : stops[0].name}</em></h2>
        <h2>Currently loading?: {isLoading}</h2>
      </div>
    );
  }
}
