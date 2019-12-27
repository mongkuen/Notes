import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

cache.writeData({
  data: {
    openModal: 'closed',
  },
})

export const client = new ApolloClient({
  cache,
  uri: 'https://tt-notes-dev.herokuapp.com/v1/graphql',
  resolvers: {
    Mutation: {
      setOpenModal: (_root, variables, { cache }): void => {
        const { openModal } = variables
        cache.writeData({ data: { openModal } })
      },
    },
  },
})
