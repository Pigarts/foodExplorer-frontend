import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 100svw;
height: 100vh;
`

export const Content = styled.div`
padding: 34px 123px ;
display: flex;
flex: 1;
flex-direction: column;
gap: 34px;

div.center{
display: flex;
flex-direction: column;
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
  @media (max-width: 999px) {
    font-size: 26px;
  }
}
h3 {
  color: ${({theme}) => theme.COLORS.Light_100};
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  @media (max-width: 999px) {
    font-size: 26px;
  }
}

button{
    margin-top: 15px;
    font-size: 17px;
  
}
}

h2.desktop{
  align-self: flex-start;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: ${({theme}) => theme.COLORS.Light_300};
  @media (max-width: 999px) {
    display: none;
  }
}

h2.mobile {
  align-self: flex-start;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: ${({theme}) => theme.COLORS.Light_300};
  @media (min-width: 999px) {
    display: none;
  }
}

`