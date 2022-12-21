import styled from "styled-components";

import {Link} from 'react-router-dom'

export const Container = styled.div`
  width:100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";  

  .brand {
    /* margin-right: 123px;
    margin-left: 123px; */
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: center;
    padding-top: 47px;


    h1 {
      font-size:32px;
      font-weight:400;

      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`
export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  margin: 0 auto;

  padding: 40px  123px;
`
export const Add = styled(Link)`
  text-decoration: none;

  height: 48px;
  padding: 32px 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.ROSE};
  color: ${({theme}) => theme.COLORS.BLACK}
  
`