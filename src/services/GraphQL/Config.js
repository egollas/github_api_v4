import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer  8c9e7109817199d37e7553f77b985652fbac994a'
      }
    }),
    cache: new InMemoryCache()
  })
}
