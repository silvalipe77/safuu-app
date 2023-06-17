import styled from 'styled-components'

export const Container = styled.div`
  .become-container {
    background: transparent;
    height: auto;
    padding: 34px 15px;
    border: 1px solid white;
    border-radius: 7px;
    display: flex;
    gap: 0;
    align-items: center;
    flex-direction: column;
    .title{
      margin: 0;
      font-family: Montserrat, cursive;
      font-size: 25px;
      color: var(--secondaryColor);
    }
    .subtitle{
      margin: 5px 0 0 0;
      font-size: 14px;
      font-weight: bold;
    }
    .text{
      margin: 10px 0;
      font-size: 14px;
    }
    .price{
      margin: 0;
      font-family: Montserrat, cursive;
      font-size: 43px;
      color: var(--secondaryColor);
      font-weight: bold;
    }
    .time{
      margin: 0;
      margin-bottom: 14px;
      font-family: Montserrat, cursive;
      font-size: 14px;
      font-weight: bold;
    }
    .btn{
      margin-top: 14px;
    }
  }
`