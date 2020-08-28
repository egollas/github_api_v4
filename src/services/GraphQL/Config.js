import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer 3bdc0fa0f37b5d5b09758e4e73812213ae0e0092',
      },
    }),
    cache: new InMemoryCache(),
  })
}
