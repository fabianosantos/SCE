import React from 'react'
import { clone } from 'ramda'

import SvgStore from '../../images/svg/svg_store.min.svg'
import Input from './input'

export const Checkbox = (props) => {
  const className = `${props.className} checkbox`
  return (
    <div className={className}>
      <Input
        type='checkbox'
        id={props.name}
        name={props.name}
        onChange={originalEvt => {
          const evt = clone(originalEvt)
          evt.target.value = evt.target.checked
          return props.onChange(evt)
        }}
        defaultChecked={!!props.checked}
        data-form={props['data-form']}
        data-page={props['data-page']}
      />
      <label htmlFor={props.name}>
        <div>{props.children}</div>
        <svg className='checkbox-check' aria-labelledby='' role='img'>
          <use
            xmlnsXlink='http://www.w3.org/1999/xlink'
            xlinkHref={`${SvgStore}#icon-check`}
          />
        </svg>
      </label>
    </div>
  )
}

export default Checkbox
