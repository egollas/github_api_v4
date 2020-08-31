import React, { useState } from 'react'
import './style.scss'

const initial_items = [
  {
    name: 'test',
    url: 'https://github.com/egollas/test'
  },
  {
    name: 'hello-world',
    url: 'https://github.com/egollas/hello-world'
  },
  {
    name: 'test2',
    url: 'https://github.com/egollas/test2'
  },
  {
    name: 'portfolio',
    url: 'https://github.com/egollas/portfolio'
  },
  {
    name: 'egomrepository',
    url: 'https://github.com/egollas/egomrepository'
  },
  {
    name: 'Git-It-For-The-World-To-See',
    url: 'https://github.com/egollas/Git-It-For-The-World-To-See'
  },
  {
    name: 'wyncode_homework',
    url: 'https://github.com/egollas/wyncode_homework'
  },
  {
    name: 'GithubPortfolio',
    url: 'https://github.com/egollas/GithubPortfolio'
  },
  {
    name: 'calculator',
    url: 'https://github.com/egollas/calculator'
  },
  {
    name: 'craiglist_scraper',
    url: 'https://github.com/egollas/craiglist_scraper'
  },
  {
    name: 'gauntlet',
    url: 'https://github.com/egollas/gauntlet'
  },
  {
    name: 'html_homean_analytics',
    url: 'https://github.com/egollas/html_homean_analytics'
  },
  {
    name: 'simple_blog',
    url: 'https://github.com/egollas/simple_blog'
  },
  {
    name: 'scafold',
    url: 'https://github.com/egollas/scafold'
  },
  {
    name: 'url_shortener',
    url: 'https://github.com/egollas/url_shortener'
  },
  {
    name: 'GettingStartedWithRails',
    url: 'https://github.com/egollas/GettingStartedWithRails'
  },
  {
    name: 'groop-final-project',
    url: 'https://github.com/cvald016/groop-final-project'
  },
  {
    name: 'composer',
    url: 'https://github.com/egollas/composer'
  },
  {
    name: 'rails-omniauth',
    url: 'https://github.com/egollas/rails-omniauth'
  },
  {
    name: 'rails-bootstrap',
    url: 'https://github.com/egollas/rails-bootstrap'
  },
  {
    name: 'AJAX-YouDo',
    url: 'https://github.com/egollas/AJAX-YouDo'
  },
  {
    name: 'cheesy-parts',
    url: 'https://github.com/egollas/cheesy-parts'
  },
  {
    name: 'github_api_v4',
    url: 'https://github.com/egollas/github_api_v4'
  }
]

export const Filter = ({ items = initial_items, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="filter">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        className="filter-input"
      ></input>
      <div className="filtered-items">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div className="filtered-item" key={index}>
              <a href={item.url}>{item.name}</a>
            </div>
          ))}
      </div>
    </div>
  )
}
