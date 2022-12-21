import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
  "header"
  "content";


  main {
    grid-area: content;
    overflow-y: auto;

    svg{
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE};
    }

    a {
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE};
      margin-left: 4px;
    }
    .movie {
      display: flex;
      flex-direction: row;
      align-items: center;

      h1 {
        margin: 24px 15px 24px 0;

        font-size: 36px;
        font-weight: 500;
      }

      svg{
        margin: 10px;
        font-size: 20px; 
        color: ${({theme}) => theme.COLORS.ROSE};
        fill: ${({theme}) => theme.COLORS.ROSE};
      }
    }
  }

  .tags{
    margin: 40px 0 40px 
  }

  p {
    font-size: 16px;
    font-weight:400;
    text-align: justify;
  }
`
export const Content = styled.div`
  height: 100vh;
  max-width: 1113px;
  margin: 0 auto;
  padding: 40px  123px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width:16px;
    height:16px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

  span {
    margin: 0 8px;
    display: flex;
    flex-direction: row;
    font-family: roboto;
    font-size: 16px;
    font-weight:400;
    
    > svg {
      margin-top: 1px;
      margin-right: 8px;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.ROSE}
    }
  }
`
export const Tags = styled.span`
  margin: 40px 8px;
`