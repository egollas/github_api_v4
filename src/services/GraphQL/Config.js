import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer c088f6f0aea76bb0ef9a87def1efdd6b4cc07271'
      }
    }),
    cache: new InMemoryCache()
  })
}
