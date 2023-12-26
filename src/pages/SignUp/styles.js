import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100svw;
height: 100svh;
padding: 65px;

background-color: ${({theme}) => theme.COLORS.Dark_400};

h1:nth-child(2){
  font-size: 37px;
  width: 223px;
}

@media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 90px clamp(20px, 40%, 100px) 90px clamp(20px, 40%, 100px);

  }

`
export const LogoBox = styled.div`
display: flex;
justify-content: center;
margin-bottom: 73px;
svg:nth-child(1){
            height: 48px;
            width: 48px;
        }

@media (min-width: 1000px) {
padding-left: 5%;
margin-right: 5%;
svg:nth-child(1){
            height: 58px;
            width: 58px;
        }

  }
`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;
margin-bottom: 32px;

h1 {
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({theme}) => theme.COLORS.Light_100};
    @media (max-width: 999px) {
    display: none;

  }
}


@media (min-width: 1000px) {
    
    background-color: ${({theme}) => theme.COLORS.Dark_700};
  }
`