import styled from 'styled-components'

export const Container = styled.div`
  .roadmap-line{
    height: 5px;
    margin: 500px 0;
    background-color: gray;
    display: grid;
    gap: 1px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    &__step{
      position: relative;
      &::before{
        z-index: 10;
        position: absolute;
        left: calc(50% - 7.5px);
        top: -5px;
        content: "";
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background: var(--secondaryColor);
      }
    }
  }
  .roadmap-card{
    position: absolute;
    width: 100%;
    background-color: var(--card-background-color);
    padding: 25px;
    border-radius: 10px;
    h4{
      font-size: 20px;
      font-weight: bold;
      font-family: Montserrat, cursive;
    }
    p{
      font-size: 14px;
      margin-top: 14px;
    }
  }
  .rm-card0{
    left: 0px;
    top: 75px;
    &::before{
      position: absolute;
      left: 50%;
      top: -70px;
      content: "";
      height: 70px;
      width: 2px;
      border-radius: 50%;
      background: gray;
    }
  }
  .rm-card1{
    left: 0px;
    bottom: 75px;
    &::before{
      position: absolute;
      left: calc(50% - 0px);
      bottom: -70px;
      content: "";
      height: 70px;
      width: 2px;
      border-radius: 50%;
      background: gray;
    }
  }
  .rm-card2{
    left: 0px;
    top: 75px;
    &::before{
      position: absolute;
      left: 50%;
      top: -70px;
      content: "";
      height: 70px;
      width: 2px;
      border-radius: 50%;
      background: gray;
    }
  }
  .rm-card3{
    left: 0px;
    bottom: 75px;
    &::before{
      position: absolute;
      left: calc(50% - 1px);
      bottom: -70px;
      content: "";
      height: 70px;
      width: 2px;
      border-radius: 50%;
      background: gray;
    }
  }
  .rm-card4{
    left: 0px;
    top: 75px;
    &::before{
      position: absolute;
      left: calc(50% - 1px);
      top: -70px;
      content: "";
      height: 70px;
      width: 2px;
      border-radius: 50%;
      background: gray;
    }
  }
`