import React from 'react'

export const withComponentDidMount = (mountFn) => (BaseComponent) =>
  class extends React.Component {
    componentDidMount() {
      return mountFn()
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  };
