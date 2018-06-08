import React from 'react';

import { path } from 'ramda'

import makeAsyncScriptLoader from 'react-async-script';

import config from '../../generated/config'

const callbackName = 'onloadcallback';
const URL = `https://www.google.com/recaptcha/api.js?onload=${callbackName}&render=explicit&hl=pt-BR`;
const globalName = 'grecaptcha';

class Recaptcha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetId: undefined,
      isExecuteRequested: true
    };
  }
  render() {
    return <div ref={ref => this.captchaElement = ref}></div>
  }
  renderCaptcha() {
    if(this.props.grecaptcha && this.state.widgetId === undefined) {
      const widgetId = this.props.grecaptcha.render(this.captchaElement, {
        sitekey: path(['captchaSiteKey'], config),
        callback: () => this.props.onCaptchaVerification(this.getResponse()),
        size: 'invisible'
      })
      this.setState({widgetId}, () => {
        if(this.state.isExecuteRequested) {
          this.execute();
          this.setState({ isExecuteRequested: false })
        }
      })
    }
  }
  componentDidMount() {
    this.renderCaptcha()
  }
  componentDidUpdate() {
    this.renderCaptcha()
  }
  execute() {
    const { grecaptcha } = this.props;
    const { widgetId } = this.state;

    if (grecaptcha && widgetId !== undefined) {
      return grecaptcha.execute(widgetId);
    } else {
      this.setState({ isExecuteRequested: true })
    }
  }
  reset() {
    if (this.props.grecaptcha && this.state.widgetId !== undefined) {
      this.props.grecaptcha.reset(this.state.widgetId);
    }
  }
  getResponse() {
    if (this.props.grecaptcha && this.state.widgetId !== undefined) {
      return this.props.grecaptcha.getResponse()
    }
    return ''
  }
}

export default makeAsyncScriptLoader(Recaptcha, URL, {
  callbackName: callbackName,
  globalName: globalName,
  exposeFuncs: ["getValue", "getWidgetId", "reset", "execute"]
});