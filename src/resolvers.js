import gql from 'graphql-tag'

export const defaults = {
  routePlanner: {
    __typename: 'routePlanner',
    state: 'Plan',
    to: '',
    from: ''
  }
};

export const resolvers = {
  Mutation: {
    updatePlannerState: (_, data, { cache }) => {
      cache.writeData({
        data: {
          routePlanner: {
            state: data.state,
            to: data.to,
            from: data.from,
            __typename: 'routePlanner'
          }
        }
      })
      console.log(cache)
    }
  }
}
