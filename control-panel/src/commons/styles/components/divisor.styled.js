import styled from 'styled-components';

export default styled.p`
  text-align: center;
  background-image: linear-gradient(to bottom, transparent 10px, #e3e3e3 10px, #e3e3e3 12px, transparent 12px);

  margin: ${props => props.spacing ? Math.pow(2, props.spacing)*0.25 : 0}rem 0px;

  > span {
    display: inline-block;
    background-color: #fff;
    padding: 0 10px;
    text-transform: none;
  }
`