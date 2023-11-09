import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

background-color: ${({theme}) => theme.COLORS.RED_1};
width: 100svw;
height: 100svh;
`
export const Content = styled.div`
padding: 37px  56px 24px 56px ;
display: flex;
flex-direction: column;
height: 100%;

`
export const FoodContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 19px;
background-color: ${({theme}) => theme.COLORS.RED_1};
width: 100%;

 
 h1 {
    margin-top: 16px;

    color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 27.041px;
    font-weight: 500;
    line-height: 140%;
 }

 p {
    margin-top: 24px;

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
width: 316px;

margin-top: 24px;
gap: 24px;
align-items: flex-start;
justify-content: space-evenly;

`;