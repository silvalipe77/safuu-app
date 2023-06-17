import styled from 'styled-components'
import params from '../../../global/params.json'

const containerParams = params.container
export const Container = styled.section`
  background: var(--solid-background);
  padding: 140px 0;
  .title{
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    font-family: Montserrat, cursive;
    margin-bottom: 108px;
  }
  .container{
    max-width: ${containerParams.maxWDesktop};
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`