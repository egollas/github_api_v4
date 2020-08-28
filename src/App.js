import React, { useState } from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'

import { SearchBox } from './components/SearchBox'
import { Loading } from './components/Loading'
import { Filter } from './components/Filter'
import { ErrorMessage } from './components/ErrorMessage'
import { createApolloClient, GET_REPOS } from './services/GraphQL'

import './App.css'

const Repos = ({ login }) => {
  const { loading, error, data } = useQuery(GET_REPOS, {
    variables: {
      login: login,
      number_of_repos: 3,
    },
  })
  if (loading) return <Loading></Loading>
  if (error) {
    return <ErrorMessage login={login}></ErrorMessage>
  }
  return (
    <Filter
      login={login}
      number_of_repos={data.user.repositories.totalCount}
    ></Filter>
  )
}

function App() {
  const client = createApolloClient()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <ApolloProvider client={client}>
      <SearchBox onClick={setSearchTerm}></SearchBox>
      <Repos login={searchTerm}></Repos>
    </ApolloProvider>
  )
}

export default App
