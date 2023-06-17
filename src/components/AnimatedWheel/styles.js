import styled from 'styled-components'

export const Container = styled.div`
  .container-circle{
    margin: auto;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    border: 1px solid  var(--card-background-color);
    position: relative;
    .icon-hover{
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background-color: var(--card-background-color);
      cursor: pointer;
      transition: all 0.5s;
      &:hover{
        background: var(--secondaryColor);
      }
    }
    .step0{
      top: -50px;
      left: 150px;
    }
    .step1{
      top: 5px;
      left: 5px;
    }
    .step2{
      top: 150px;
      right: -50px;
    }
    .step3{
      top: 5px;
      right: 5px;
    }
    .step4{
      bottom: -50px;
      right: 150px;
    }
    .step5{
      bottom: 5px;
      right: 5px;
    }
    .step6{
      bottom: 150px;
      left: -50px;
    }
    .step7{
      bottom: 5px;
      left: 5px;
    }
  }
`