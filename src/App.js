import React, { useState } from 'react'
import { ApolloProvider, useQuery } from '@apollo/client'

import { SearchBox } from './components/SearchBox'
import { Loading } from './components/Loading'
import { Filter } from './components/Filter'
import { ErrorMessage } from './components/ErrorMessage'
import { createApolloClient, GET_REPOS } from './services/GraphQL'

import './App.css'

const Repos = ({ login, number_of_repos }) => {
  const count = number_of_repos ? number_of_repos : 1
  const { loading, error, data } = useQuery(GET_REPOS, {
    variables: {
      login: login,
      number_of_repos: count
    }
  })
  if (login === '') return <></>
  if (loading) return <Loading></Loading>
  if (error) {
    return <ErrorMessage login={login}></ErrorMessage>
  }
  if (number_of_repos)
    return (
      <Filter
        items={data.user.repositories.nodes}
        placeholder="Repository Name"
      ></Filter>
    )
  return (
    <Repos
      login={login}
      number_of_repos={data.user.repositories.totalCount}
    ></Repos>
  )
}

function App() {
  const client = createApolloClient()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <SearchBox onClick={setSearchTerm}></SearchBox>
        <div className="container-body">
          <Repos login={searchTerm}></Repos>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
