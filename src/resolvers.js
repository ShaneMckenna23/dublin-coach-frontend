import gql from 'graphql-tag'

export const defaults = {
  routePlanner: {
    __typename: 'routePlanner',
    state: 'Plan'
  }
};

export const resolvers = {
  Mutation: {
    updatePlannerState: (_, d, { cache }) => {
      cache.writeData({
        data: {
          routePlanner: {
            state: d.state,
            __typename: 'routePlanner'
          }
        }
      })
    }
  }
}
