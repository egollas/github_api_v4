import React, { useState } from 'react'
import './style.scss'

export const Filter = ({ items = [], placeholder }) => {
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
