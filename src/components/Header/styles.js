import styled from 'styled-components';
import params from '../../global/params.json'

const containerParams = params.container
export const Container = styled.div`
  z-index: 20;
  height: 90px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background: ${props => props.bgColor};
  transition: background 0.5s ease-in-out;
  .header{
    display: inline-block;
    max-width: ${containerParams.maxWHeaderDesktop};
    height: 90px;
    width: 100%;
    margin: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  .logo{
    width:192px;
    height: 45px;
  }
  .navbar{
    &__desktop{
      ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        list-style: none;
        li{
          a{
            color: var(--primaryColor);
            text-decoration: none;
            font-size: 15px;
            transition: color 0.5s;
            font-weight: 600;
          }
        }
        li:hover{
          a{
            color: var(--secondaryColor);
          }
        }
      }
    }
    &__mobile{
      display: none;
    }
  }

  .mobile-button{
    display: none;
  }
`;
