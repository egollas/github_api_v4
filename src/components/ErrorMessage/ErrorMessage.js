import React from 'react'
import './style.scss'

export const ErrorMessage = ({ login }) => (
  <div className="loading">
    Could not resolve to a User with the login of {login}
  </div>
)
