import React from 'react';

const hasOptions = options => Object.keys(options).length >= 0

const createOptions = options => {
  return [(<option value="" key="">-- selecione --</option>)]
    .concat(Object
      .keys(options)
      .map(value => (<option value={value} key={value}>{options[value]}</option>))
    )
}

class Select extends React.Component {
  render() {
    const {
      options,
      className: injectedClassName,
      ...selectProps
    } = this.props;
    const className = `form-control ${injectedClassName}`

    if (hasOptions(options)) {
      return (
        <select
          {...selectProps}
          className={className}
          defaultValue=''
          data-form="signup"
          data-page="signup"
        >
          { createOptions(options) }
        </select>
      )

    } else {
      return null
    }
  }
}

export default Select
