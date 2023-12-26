import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

overflow-x: hidden;

width: 100svw;
height: 100svh;
`

export const Content = styled.div`
padding: 15px 24px ;
flex: 1;
`

export const CardBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 24px ;
margin-top: 27px;
width: 100%;
 
@media (min-width: 999px) {
    margin-top: 100px;
  }
`
export const FoodContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 62px;
`