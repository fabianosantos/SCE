import styled from 'styled-components'

export default styled.label`
  display: inline-block;
  width: 200px;
  text-align: right;
  padding-right: 5px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    text-align: left;
  }

  @media (max-width : 480px) {
    width: 175px;
  }
`