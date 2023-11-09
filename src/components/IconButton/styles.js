import styled from "styled-components"

export const Container = styled.button`
display: flex;
align-items: center;
gap: 5px;

width: fit-content;
height: auto;   
border: none;
background: none;
 
color: ${({theme}) => theme.COLORS.Light_100};
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 140%;

&:disabled {
    opacity: .5;
}

`