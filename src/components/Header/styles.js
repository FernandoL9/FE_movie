import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
   grid-area: header;

   /* width:100%; */
   height:116px;
  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding-left: 24px;
    padding-right: 24px;
  
    h1 {
      font-size:24px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.ROSE};
    }
  
    input {
      margin: 0 64px;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
      border: none;
      padding: 10px;
      border-radius: 10px;
      min-width: 45vw;
      height: 56px;
    }
`
export const Profile = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center; 
  gap: 8px;

  div{
     display: flex;
    flex-direction: column;

    > strong {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.WHITE}
    }

    > a {
      text-decoration: none;
      color:  ${({theme}) => theme.COLORS.GRAY_300};
      align-self: end; 
    }
  }


  img {
    width: 64px;
    height: 64px;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 50%
  }
`