import styled from "styled-components";

export const Container = styled.div`
  max-width: 1113px;
  display: flex;
  flex-direction:column;
  padding: 32px;

  margin-bottom: 24px;
  border-radius: 16px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 24px;
    font-weight:700px;
    color: ${({theme}) => theme.COLORS.WHITE}
  }


`
export const Content = styled.div`
  margin-top: 8px;
  p {
    margin-top: 8px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight:400;
    color: ${({theme}) => theme.COLORS.GRAY_300}
  }


  > footer {
        display: flex;}
`