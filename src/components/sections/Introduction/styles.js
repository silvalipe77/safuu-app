import styled from 'styled-components'
import params from '../../../global/params.json'

const containerParams = params.container
export const Container = styled.section`
  background: var(--solid-background);
  padding: 140px 0 140px 0;
  .container{
    max-width: ${containerParams.maxWDesktop};
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .right-info{
    padding-left: 100px;
    &__title{
      font-family: Montserrat, cursive;
      font-size: 45px;
      margin: 0;
      line-height: 1.7;
    }
    &__sub-title{
      font-size: 18px;
      margin: 11px 0 0 0;
      line-height: 1.7;
    }
    &__text{
      font-size: 14px;
      margin: 28px 0 0 0;
      line-height: 1.7;
    }
    &__btn-head{
      line-height: 1.7;
      font-size: 14px;
      margin: 10px 0;
      font-weight: bold;
    }
    &__buttons{
      margin: 37px 0 0 0;
    }
  }
`