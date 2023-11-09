import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;

top: 50%;
left: 40%;
position: absolute;
z-index: 5;

border: 5px solid ${({theme}) => theme.COLORS.Cake_100};
background: ${({theme}) => theme.COLORS.Dark_500};
padding: 10px 50px ;

color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

button {
    color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    background-color: ${({theme}) => theme.COLORS.Cake_100};
    padding: 5px 10px ;
    margin-top: 10px;
}
`

