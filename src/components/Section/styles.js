import styled from "styled-components";

export const Container = styled.section`
    margin-top: 40px;

    > h2 {
      border-bottom-width: 1px;
      /* border-bottom-style: solid ; */
      border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};


      padding-bottom: 16px;
      margin-bottom: 28px;

      color: ${({theme}) => theme.COLORS.GRAY_300}; 
      font-size: 22px;
      font-weight: 400;
    }

`