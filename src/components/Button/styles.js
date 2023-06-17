import styled from 'styled-components'

export const ButtonDefault = styled.div`
  padding: 15px 0px;
  a{
    background-color: transparent;
    color: var(--primaryColor);
    padding: 15px 35px;
    border: 2px solid var(--secondaryColor);
    border-radius: 40px;
    transition: all 0.5s;
    text-decoration: none;
    font-weight: 600;

    &:hover{
      background-color: var(--secondaryColor);
      color: var(--primaryColor);
    }
  }
`

export const ButtonSecondary = styled.div` 
  padding: 15px 0px; 
  a{
    color: var(--primaryColor);
    padding: 15px 35px;
    border: 2px solid var(--secondaryColor);
    border-radius: 40px;
    transition: all 0.5s;
    text-decoration: none;
    font-weight: 600;
    background-color: var(--secondaryColor);
    &:hover{
      background-color: transparent;
      color: var(--primaryColor);
    }
  }
`
