import styled from "styled-components"

export const Container = styled.button`
width: fit-content;
height: auto;   
border: none;
background: none;
color: ${({theme}) => theme.COLORS.Light_100};

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;

&:disabled {
    opacity: .5;
}

`