import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  /* margin-top: 6px; */
  margin-right: 8px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};
`