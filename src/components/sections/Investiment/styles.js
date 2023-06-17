import styled from 'styled-components'
import params from '../../../global/params.json'

const containerParams = params.container
export const Container = styled.section`
  background: transparent;
  padding: 140px 0;
  .container{
    max-width: ${containerParams.maxWDesktop};
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left-info{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
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
      &__buttons{
        margin-top: 37px;
      }
    }
    .right-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      &__data{
        font-family: Montserrat, cursive;
        font-size: 65px;
        margin: 0;
        line-height: 1.7;
      }
      &__sub-title{
        font-size: 14px;
        margin: 8px 0 45px 0;
        line-height: 1.7;
      }
    }
  }
`