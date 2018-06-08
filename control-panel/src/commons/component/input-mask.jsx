import React from 'react'
import Input from './input'

const getCursor = elm => {
  if (typeof(elm.selectionStart) !== 'number' || typeof(elm.selectionEnd) !== 'number') {
    return -1
  }

  return elm.selectionEnd > elm.selectionStart
    ? elm.selectionEnd
    : elm.selectionStart
}

const getClearValuesAndCursor = elm => {
  const cursor = getCursor(elm)
  const values = elm.value.split('')
    .map(char => /\d/
      .test(char)
        ? char
        : undefined)
  const offset = values.reduce(
    (acc, char, index) => (index < cursor && char === undefined)
      ? acc +1
      : acc,
    0)
  return {
    cursor: cursor -offset,
    values: values.filter(Boolean)
  }
}

const createMaskValue = (mask, maskMap) => nomask => {
  const limit = nomask.length
  if (limit) {
    const maskedValue = maskMap.reduce((acc, placeHolder, index) => {
      if (index < limit) {
        acc[placeHolder] = nomask[index]
      }
      return acc
    }, mask.split(''))
    const lastChar = maskMap[limit - 1] >= 0
      ? maskMap[limit - 1] + 1
      : maskedValue.length
    return maskedValue.slice(0, lastChar).join('')
  }
  return ''
}

const createSetValidCursor = maskMap => (elm, cursor) => {
  if (!elm) {
    return
  }

  const validCursor = maskMap[cursor] >= 0
    ? maskMap[cursor]
    : elm.value.length

  if (typeof(elm.selectionStart) === 'number' && typeof(elm.selectionEnd) === 'number') {
    elm.selectionStart = validCursor
    elm.selectionEnd = validCursor

  } else {
    const range = elm.createTextRange()
    range.collapse(true)
    range.moveStart('character', validCursor)
    range.moveEnd('character', validCursor)
    range.select()
  }
}

const safeCall = fn => {
  const call = window
    ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    : () => setTimeout(fn, 0)

  fn()
  call(fn)
}

const createMaskMap = (mask) => {
  return mask.split('').reduce((acc, char, key) => {
    if (char === '_') {
      acc.push(Number(key))
    }
    return acc
  }, [])
}

export const getMaskValue = (mask, value) => {
  try {
    const maskMap = createMaskMap(mask)
    const maskValue = createMaskValue(mask, maskMap)
    return maskValue(value)
 } catch (e) {
   return ''
 }
}

const applyMask = ({ mask, onChange }) => {
  const safeOnChange = typeof onChange === 'function'
    ? onChange
    : x => x
  const maskMap = createMaskMap(mask)
  const maskValue = createMaskValue(mask, maskMap)
  const setValidCursor = createSetValidCursor(maskMap)

  return evt => {
    try {
      evt.preventDefault()
      const elm = evt.target
      const { cursor, values } = getClearValuesAndCursor(elm)
      elm.value = maskValue(values)
      safeCall(() => setValidCursor(elm, cursor))
      safeOnChange(evt)
      return elm

    } catch (err) {
      safeOnChange(evt)
    }
  }
}

export default class InputMask extends React.Component {

  render() {
    return (<Input {...this.props} type='tel' onChange={applyMask(this.props)} />)
  }

}
