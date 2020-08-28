import { gql } from '@apollo/client'

export const GET_REPOS = gql`
  query($number_of_repos: Int!, $login: String!) {
    user(login: $login) {
      repositories(last: $number_of_repos) {
        totalCount
        nodes {
          name
          url
        }
      }
    }
  }
`
