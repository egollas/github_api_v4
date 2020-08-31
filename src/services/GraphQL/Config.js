import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer c3744595bcb14d1131837ffd40f5ebe979b885e9'
      }
    }),
    cache: new InMemoryCache()
  })
}
