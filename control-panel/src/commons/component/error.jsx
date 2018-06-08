import React from 'react'
import { path } from 'ramda'

export function hasNamedError(name, errors) {
  return !!getNamedError(name, errors)
}

function getNamedError(name, errors) {
  return path([name], errors)
}

const Error = ({ name, errors, className = ''}) => {
  const errorMsg = getNamedError(name, errors)
  return errorMsg && errorMsg.length
    ? (
      <div className={`inputGroup-error ${className}`}>
        {errorMsg}
      </div>
    )
    : null
}

export default Error
