import React from 'react'

import SvgStore from '../../images/svg/svg_store.min.svg'

const Svg = ({ name, className = '' }) => {
  return (
    <svg className={`svg-icon svg-icon-sm ${className}`} aria-labelledby="" role="img">
      <use xlinkHref={`${SvgStore}#${name}`}></use>
    </svg>
  )
}

export default Svg
