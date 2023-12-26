import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100svw;
height: 100vh;

`

export const Content = styled.div`
display: flex;
flex-direction: column;
padding: 54px 124px;
flex: 1;
font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 140%;
color: ${({theme}) => theme.COLORS.Light_300};

@media (max-width: 999px) {
  padding: 56px 35px ;
  justify-content: flex-start;
  
}
div.center{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
h2 {
  color: ${({theme}) => theme.COLORS.Light_100};
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
}
`
export const FoodContainer = styled.div`
display: flex;
margin-top: 32px;
gap: 48px;
@media (max-width: 999px) {
  flex-direction: column;
  gap: 0px;
  margin-top: 43px;
  }
`