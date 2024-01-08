import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 100svw;
height: 100vh;
`

export const Content = styled.div`
padding: 34px 123px ;
display: flex;
flex: 1;
flex-direction: column;
gap: 34px;



h2.desktop{
  align-self: flex-start;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: ${({theme}) => theme.COLORS.Light_300};
  @media (max-width: 999px) {
    display: none;
  }
}

h2.mobile {
  align-self: flex-start;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: ${({theme}) => theme.COLORS.Light_300};
  @media (min-width: 999px) {
    display: none;
  }
}

table{
  border-collapse: collapse;
  height: fit-content;
  @media (max-width: 999px) {
    display: none;
  }
  th{
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-align: left;
    color: ${({theme}) => theme.COLORS.Light_300};
  }
}

table {
  td{
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.Light_400};
  }
  select {
    min-width: max-content;  }
}

td:nth-child(1){
  div.flex{
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

td:nth-child(1), th:nth-child(1),
td:nth-child(2), th:nth-child(2),
td:nth-child(4), th:nth-child(4) {
 width: 13%;
 min-width: 151px;
}
td:nth-child(3), th:nth-child(3){
 width: 61%;
}

table td, table th{

  width: 300px;
  height: fit-content;
  padding: 16px 24px;
  border: 2px solid ${({theme}) => theme.COLORS.Dark_1000};
}
div.Pendente{
  width: 8px;
  height: 8px;
  background-color: ${({theme}) => theme.COLORS.Tomato_300};
  border-radius: 50%;
}
div.Preparando{
  width: 8px;
  height: 8px;
  background-color: ${({theme}) => theme.COLORS.Carrot_100};
  border-radius: 50%;
}
div.Entregue{
  width: 8px;
  height: 8px;
  background-color: ${({theme}) => theme.COLORS.Mint_100};
  border-radius: 50%;
}

@media (max-width: 999px) {
    padding: 35px 56px
  }
`

export const Card = styled.div`
display: flex;
flex-direction: column;
padding: 24px;

width: 358px;

color: ${({theme}) => theme.COLORS.Light_400};
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 160%; 

border-radius: 8px;
border: 2px solid ${({theme}) => theme.COLORS.Dark_1000};

 div.flex{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;

  div.flex2{
  display: flex;
  align-items: center;
  gap: 8px;
 } 
 } 

 p{

 }

 @media (min-width: 999px) {
    display: none;
  }
`

