import styled from 'styled-components'

export default styled.span`
  color: red;
  display: block;
  width: 100%;
  margin-left: 175px;
  order: 1;

  & ~ input {
    border-color: red;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }
`