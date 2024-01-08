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

flex-wrap: wrap;
@media (max-width: 999px) {
  flex-direction: column;
  gap: 0px;
  margin-top: 43px;
  }
`

export const CardContent = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 16px  0;

  width: fit-content;
  height: fit-content;


  div.column {
    margin-left: 16px;
    display: flex;
    flex-direction: column;

    h2{
      text-align: left; 
    }

    button {
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      min-width: max-content;
      color: ${({theme}) => theme.COLORS.Tomato_400}
    }

  }
  @media (max-width: 999px) {
    gap: 12px;
  }
  `;

  export const CardImage = styled.img`
      height: 100px;
      width: 100px;
  `;
  
    export const ImgButton = styled.button`
    background: none;
    border: none;
  `;

export const CardTitle = styled.h2`
  width: 100%;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 160%; 
  text-align: center;
  color: ${({theme}) => theme.COLORS.Light_300};
  min-width: max-content;
  `;
