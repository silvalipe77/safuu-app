import styled from 'styled-components'
import params from '../../global/params.json'

const containerParams = params.container

export const Container = styled.section`
  background: var(--solid-background);
  .container{
    max-width: ${containerParams.maxWDesktop};
    width: 100%;
    height: 105px;
    border-top: 1px solid #aaaaaaaa;
    padding: 10px 0 45px 0;
    margin: 0 auto;
  }
`