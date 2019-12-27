import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://tt-notes-dev.herokuapp.com/v1/graphql',
})
