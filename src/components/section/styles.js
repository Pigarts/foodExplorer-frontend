import styled from "styled-components"

export const Container = styled.div`
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
border: none;
background: none;
color: ${({theme}) => theme.COLORS.Light_100};

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;
`

export const Box = styled.div`
height: 100%;
display: flex;
flex-direction: row;
gap: 16px;
width: 100%;

position: relative;
`
export const Content = styled.div`
margin-top: 24px;
display: flex;
flex-direction: row;
gap: 16px;

height: fit-content;   
overflow-x: auto;
scroll-behavior: smooth;
`

export const FadeIn = styled.div`
position: absolute;
height: 85%;
width: 278px;
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
left: -1px;
z-index: 4;

display: flex;
align-items: center;
padding-left: 19px;

pointer-events: none;

 button{
pointer-events: all;
 }

 @media (max-width: 999px) {
display: none;
  }
`
export const FadeOut = styled.div`
position: absolute;
width: 278px;
height: 85%;
background: linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
right: -1px;
z-index: 4;

display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 19px;

pointer-events: none;

button{
pointer-events: all;
 }

 @media (max-width: 999px) {
    display: none;
  }
`