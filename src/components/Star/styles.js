import styled from "styled-components";

export const Container = styled.div`
  svg {
    margin: 10px;
    font-size: 20px; 
    color: ${({theme}) => theme.COLORS.ROSE};
    fill: ${({theme, isActive}) => isActive ? theme.COLORS.ROSE: "none"};
  }
`