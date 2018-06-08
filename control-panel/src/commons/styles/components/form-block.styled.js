import styled from 'styled-components'

export default styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  ${props => props['offsetLeft'] && `margin-left: 175px;`}

  ${props => props['column'] && `
    flex-direction: column;
    align-items: stretch;

    > label {
      text-align: left;
    }
  `}

  @media (max-width: 800px) {
    flex-wrap: wrap;
    margin-left: 0;
  }

  @media (min-width: 801px) {
    .form-control {
      width: 200px;
      ${props => props['id'] === 'password' && `
        width: 250px;
      `}
      ${props => props['big-input'] && `
        width: 400px;
        margin-right: 150px;
      `}
      display: inline-block;
    }
  }
`