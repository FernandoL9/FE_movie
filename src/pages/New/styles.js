import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height: 100vh;

  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";  

  svg{
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE};
    }

  button {
      border: none;
      background: none;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE};
      margin-left: 4px;
    }
  
  h1 {
        margin: 24px 15px 24px 0;

        font-size: 36px;
        font-weight: 500;
  }


`
export const Content = styled.div`
  display: flex;
  justify-content:center;
  max-width: 1137px;
  padding: 40px 123px;
  margin: 0 auto;
  /* margin-left: 123px; */
  /* margin-right: 123px; */
   /* grid-area: content;
   overflow-y: auto; */
`
export const Form = styled.form`

  div {
    display: flex;
    align-self: center;
    gap: 40px ;
    margin-bottom: 20px;
  }

  .tags {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    
    padding: 16px;
    background-color: ${({theme}) => theme.COLORS.BLACK};

    border-radius: 8px;
  }
  
`
export const Option = styled.div`
  margin-top: 40px;
`