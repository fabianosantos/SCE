import React from 'react'

import InputMask from './input-mask'
import { convertFromDDMMYYYY, convertFromYYYYMMDD } from '../utils/format-date'

const translateValue = value => convertFromYYYYMMDD(value)

const translateChange = onChange => evt => {
  return onChange({
    ...evt,
    target: {
      ...evt.target,
      value: convertFromDDMMYYYY(evt.target.value)
    }
  })
}

const InputDate = props => {
  return (
    <InputMask
      {...props}
      value={translateValue(props.value)}
      onChange={translateChange(props.onChange)}
      mask='__/__/____'
      placeholder='Ex: 01/01/1999'
    />
  )
}

export default InputDate