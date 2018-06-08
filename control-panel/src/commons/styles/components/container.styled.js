import styled from 'styled-components'

export default styled.div`
  max-width: ${props => props['maxWidth'] || 740}px;
  margin: 3rem auto 0;

  @media (max-width: 800px) {
    padding: 0 15px 15px 15px;
    flex-wrap: wrap;
    max-width: 100%;
  }
`