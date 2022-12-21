import styled from "styled-components";

import backgroundImg from "../../assests/cinema.png"

export const Container = styled.div`
  
  height: 100vh;
  display: flex;
  align-items: stretch;

`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  /* text-align: center; */

  h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ROSE};
    font-weight:700;
  }

  span {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  h2 {
    padding: 48px 0 ;
    font-size: 24px;
    font-weight:400;
  }

  .Option {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
      color: ${({theme}) => theme.COLORS.ROSE}
    }

    a {
      padding: 42px 0;
  
      font-size: 16px;
      font-weight:400;
  
      display: flex;
      align-items: center;
      justify-content: center;
  
      color: ${({theme}) => theme.COLORS.ROSE};
  }
  }
`


export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`;