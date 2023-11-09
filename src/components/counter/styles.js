import styled from "styled-components"

export const Container = styled.div`
width: fit-content;
height: auto;   
border: none;
background: none;

color: ${({theme}) => theme.COLORS.Light_100};

display: flex;
align-items: center;
gap: 14px;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;

`

export const Number = styled.span`
width: fit-content;
color: ${({theme}) => theme.COLORS.Light_300};

font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 100%;


`