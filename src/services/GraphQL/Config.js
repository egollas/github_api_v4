import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'Bearer  0feea001256285907ac07909f383e3b95bca49cc'
      }
    }),
    cache: new InMemoryCache()
  })
}
