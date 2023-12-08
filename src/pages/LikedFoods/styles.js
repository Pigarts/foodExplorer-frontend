import styled from "styled-components"

export const Container = styled.div`

width: 100svw;
height: 100vh;

`

export const Content = styled.div`
display: flex;
flex-direction: column;
padding: 15px 124px ;
height: 100%;
 
font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 140%;
color: ${({theme}) => theme.COLORS.Light_300};

@media (max-width: 999px) {
  padding: 34px 35px ;
  justify-content: flex-start;
  }
`
export const FoodContainer = styled.div`
display: flex;
margin-top: 32px;
gap: 48px;
@media (max-width: 999px) {
  flex-direction: column;
  gap: 0px;

  }
`