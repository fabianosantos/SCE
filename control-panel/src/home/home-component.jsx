import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import Input from '../commons/component/input'
import InputNumber from '../commons/component/input-number'
import Button from '../commons/component/button'

import {
  getAllQueryParams,
  pushOrRedirect,
} from '../commons/query'

import { pathOr, pathEq } from 'ramda'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empresa: {
        id: '',
        name: ''
      },
      vale: {
        id: '',
        empresaId: '',
        value: 0
      },
      empenho: {
        id: '',
        empresaId: '',
        value: 0
      }
    };
  }

  redirect(url) {
    return (e) => {
      e.preventDefault()
      pushOrRedirect(this.props.history.push, {
        url:url,
        push: true
      })
    }
  }


  render() {
    const { empresa, empenho, vale } = this.state
    return (
      <div className="entrar__wrapper">
        <h2 className="entrar-title">
          <svg aria-labelledby='' role='img'>
            <use
              xmlnsXlink='http://www.w3.org/1999/xlink'
              xlinkHref={`#bhf_icon-user`}
            />
          </svg>
          <span>Identificação</span>
        </h2>
        <form onSubmit={this.selectEmpresa}>
          <label className="entrar-inputBlock --column" id="emai">
            <label className="entrar-inputLabel">Empresa :</label>
            <Input
              id='email-input'
              className="entrar-input form-control"
              name="email"
              required
              value={empresa.name}
              onChange={this.handleChange('empresa.nome')}
            />
          </label>

          <Button
            id='login-button'
            primary
            className='entrar-button'>
            Continuar
          </Button>
        </form>

      </div>
    )
  }
  selectEmpresa = (event) => {
    event.preventDefault()
    pushOrRedirect(this.props.history.push, 'novo-react ')
  }
  handleChange = (formName, transformValue = v => v) => ({target}) => {
    this.setState(state => ({
      ...state,
      [formName]: {
        ...state[formName],
        [target.name]: transformValue(target.value)
      }
    }))
  }
};

export default withRouter(Home)