import styled from 'styled-components'
import params from '../../../global/params.json'

const containerParams = params.container

export const Container = styled.section`
  background: var(--solid-background);
  .container{
    max-width: ${containerParams.maxWDesktop};
    width: 100%;
    margin: 0 auto;
  }
  .title-banner{
    text-align: center;
    padding: 220px 0 160px 0;
    font-family: Montserrat, cursive;
    
    &__primary{
      color: var(--secondaryColor);
      font-size: 35px;
      font-weight: bold;
    }
    &__secondary{
      color: var(--primaryColor);
      font-size: 35px;
    }
  }
  .cards-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`