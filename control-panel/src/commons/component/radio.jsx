import React from 'react'

import Input from './input'
import { dissoc } from 'ramda'

const Radio = (props) => {
  const id = `${props.name}_${props.value}`
  const className = `radio ${props.className}`
  return (
    <div className={className}>
      <Input
        type='radio'
        id={id}
        {...dissoc('text', props)}
      />
      <label htmlFor={id}>{props.text}</label>
    </div>
  )
}

export default Radio
