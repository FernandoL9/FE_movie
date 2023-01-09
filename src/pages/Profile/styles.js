import styled from "styled-components"

export const Container =  styled.div`

  header{
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    padding-left: 144px;

    svg{
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE};
    }

  button {
      background: none;
      border: none;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE};
      margin-left: 4px;
    }

  }
`
export const Form =  styled.div`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 44px;
  }
`

export const Avatar =  styled.div`
  position: relative;
  margin: -124px auto 64px;

  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;
    
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: 50%
  }

  label {
    width:48px;
    height:48px;

    background-color: ${({theme}) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.BLACK}
    }
  }
`