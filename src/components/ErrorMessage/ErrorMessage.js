import React from 'react'
import './style.scss'

export const ErrorMessage = ({ login }) => (
  <div className="text-style-regular">
    Could not resolve to a User with the login of
    <span className="text-style-bold">{login}</span>
  </div>
)
