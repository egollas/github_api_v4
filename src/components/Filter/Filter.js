import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_REPOS } from '../../services/GraphQL'
import './style.scss'

export const Filter = ({ login, number_of_repos }) => {
  const { data } = useQuery(GET_REPOS, {
    variables: {
      login: login,
      number_of_repos: number_of_repos,
    },
  })
  const repos = data ? data.user.repositories.nodes : []
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Repository Name"
        onChange={(e) => handleChange(e)}
      ></input>
      {repos
        .filter((repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((repo, index) => (
          <a key={index} href={repo.url}>
            <div>{repo.name}</div>
          </a>
        ))}
    </div>
  )
}
