import styled from "styled-components";

export const Container = styled.div`
  svg {
    margin-right: 6px;
    font-size: 12px; 
    color: ${({theme}) => theme.COLORS.ROSE};
    fill: ${({theme, isActive}) => isActive ? theme.COLORS.ROSE: "none"};
  }
`