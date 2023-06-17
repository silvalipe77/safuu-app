import styled from 'styled-components'
import params from '../../../global/params.json'

const containerParams = params.container
export const Container = styled.section`
  background: transparent;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`