import React from 'react'

import { dispatchMetric } from '../../metrics'
import getIsMobile from '../utils/get-is-mobile'

const getInputValue = function(props, e) {
  if (props.type === 'password') {
    return null
  }

  if (props.type === 'checkbox') {
    return !!e.target.checked;
  }

  return props.value || e.target.value
}

const doClick = function(props) {
  if (props.type !== 'radio' && props.type !== 'checkbox') {
    return;
  }

  return function(e) {
    if (props.onClick) {
      props.onClick(e)
    }
    dispatchMetric('form:field', {
      field: props.name,
      value: getInputValue(props, e),
      from: props['data-form'],
      page: props['data-page']
    })
  }
}

const doBlur = function(props) {
  if (props.type === 'radio' || props.type === 'checkbox') {
    return;
  }

  return function(e) {
    if (props.onBlur) {
      props.onBlur(e)
    }
    dispatchMetric('form:field', {
      field: props.name,
      value: getInputValue(props, e),
      from: props['data-form'],
      page: props['data-page']
    })
  }
}

const Input = fullProps => {
  const { className, disabled, ...props } = fullProps
  const disabledProp = disabled ? { disabled: 'true' } : {}
  const inputProps = {
    ...props,
    ...disabledProp,
    className: `form-control ${className}`
  }
  return(
    <input
      onClick={doClick(fullProps)}
      onBlur={doBlur(fullProps)}
      autoComplete={getIsMobile() ? 'off' : 'on'}
      {...inputProps}
    />
  )
}

export default Input
