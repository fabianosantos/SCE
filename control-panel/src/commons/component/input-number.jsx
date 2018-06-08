import React from 'react'

import InputMask from './input-mask'
import Input from './input'

const hasSelection = () => typeof(document.createElement('input').selectionStart) === 'number'

const changeWithLimit = (onChange, maxLength) => evt => {
  evt.preventDefault()
  try {
    const elm = evt.target
    if (maxLength.length > 0) {
      if (elm.value.length > 0) {
        elm.value = elm.value.substring(0, Number(maxLength))
      }
    }
    onChange(evt)
    return elm

  } catch (err) {
    onChange(evt)
  }
}

const InputNumber = ({ onChange, maxLength,...props }) => {
  if (hasSelection()) {
    return (
      <InputMask
        {...props}
        onChange={onChange}
      />
    )
  } else {
    return (
      <Input
        {...props}
        type='number'
        onChange={changeWithLimit(onChange, maxLength)}
      />
    )
  }
}

export default InputNumber