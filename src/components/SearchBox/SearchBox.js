import React from 'react'
import './style.scss'

export const SearchBox = ({ onClick }) => {
  let searchTerm = ''
  const handleChange = (e) => {
    searchTerm = e.target.value
  }

  const handleEnter = ({ keyCode }) => {
    if (keyCode === 13) onClick(searchTerm)
  }

  const handleClick = () => {
    onClick(searchTerm)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Github Username"
        className="input"
        onChange={(e) => handleChange(e)}
        onKeyDown={handleEnter}
      ></input>
      <button onClick={() => handleClick()}>Search</button>
    </div>
  )
}
