import React from 'react';

class Button extends React.Component {
  render() {
    const { 
      children,
      primary,
      loading,
      className: injectedClassName,
      ...buttonProps
    } = this.props;

    const primaryClass = `btn-${primary ? 'primary' : 'default'}`
    const loadingClass = loading ? '--loading' : ''
    const className = `btn ${primaryClass} submit-button ${loadingClass} ${injectedClassName}`

    return (
      <button
        {...buttonProps}
        type='submit'
        className={className}>
        {children}
      </button>
    )
  }
}

export default Button
