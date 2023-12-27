import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

overflow-x: hidden;

background-color: ${({theme}) => theme.COLORS.RED_1};
width: 100svw;
flex: 1;
`
export const Content = styled.div`
padding: 37px  56px 24px 56px ;
display: flex;
flex-direction: column;

height: 100%;
@media (min-width: 999px) {
   padding: 25px 130px ;
}

`
export const FoodContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 19px;
background-color: ${({theme}) => theme.COLORS.RED_1};
div.foodInfos {
   align-items: center;
   p  {
      text-align: center;
      width: 100%;
   }
}

@media (min-width: 999px) {
   flex-direction: row;
   justify-items: center;
   img {
      height: 390px;
      width: 390px;
   }
   
   button.order {
      width: 162px;
      margin-left: 15px;
      >svg {
         display: none;
      }
   }
   div.foodInfos {
      width: fit-content;
      margin-left: 47px;
      flex-direction: column;
      gap: 24px;
      p {
         text-align: start;
      }
   }
}


h1 {
   margin-top: 16px;
   color: ${({theme}) => theme.COLORS.Light_100};
   font-family: Poppins;
   font-size: 27.041px;
   font-weight: 500;
   line-height: 140%;
   text-align: center;
   
   @media (min-width: 999px) {
      text-align: start;
   }
}

p {
   margin-top: 24px;
   width: fit-content;
   
   color: ${({theme}) => theme.COLORS.Light_100};
   
   text-align: center;
   font-family: Poppins;
   font-size: 16px;
   font-weight: 400;
   line-height: 140%;
}

.addLine {
   margin-top: 48px;
    display: flex;
    gap: 16px;
    align-items: center;
 }
`
export const FoodImage = styled.img`
height: 264px;
width: 264px;
`;

export const Tags = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 24px;
gap: 24px;
align-items: flex-start;
justify-content: space-evenly;

@media (min-width: 999px) {
   width: 687px;
   justify-content: flex-start;
  }

`;