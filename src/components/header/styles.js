import styled from "styled-components";

export const Container = styled.header`


`
export const Mobile = styled.div`

display: flex;
align-items: center;
justify-content: space-between;


background-color: ${({theme}) => theme.COLORS.Dark_700};

width: 100svw;
height: 114px;
padding: 52px 28px 24px ;


@media (min-width: 999px) {
    display: none;
    
  }

  div.admLogo {
display: flex;
align-items: center;
gap: 8px;
color: ${({theme}) => theme.COLORS.Cake_200};

> span {
  font-family: roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
}
`

export const Desktop = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
gap: 32px;

background-color: ${({theme}) => theme.COLORS.Dark_700};

width: 100svw;
height: 104px;
padding: 24px 123px;

button.new, button.cart {
  max-width: 216px;
}

button.likeds {
  min-width: 104px;
  color: ${({theme}) => theme.COLORS.Light_300}
}
button.ordersHistory {
  min-width: 145px;
  color: ${({theme}) => theme.COLORS.Light_300}
}

input{
  background-color: aqua;
  position: relative;
}
@media (max-width: 999px) {
    display: none;
  }
`

export const SearchBox = styled.div`
position: absolute;

display: flex;
overflow-y: auto;
flex-direction: column;
gap: 10px;
padding: 5px;
width: 500px;
height: fit-content;

z-index: 7;

background-color: red;
padding: 20px;
//background-color: ${({theme}) => theme.COLORS.Dark_600};
`

export const FoodBox = styled.div`
display: flex;
align-items: center;
gap: 15px;
cursor: pointer;
padding-bottom: 10px;
border-bottom: 2px solid ${({theme}) => theme.COLORS.Dark_900};;
color: ${({theme}) => theme.COLORS.Light_100};
font-family: Poppins;
font-size: 12px;
font-weight: 500;
line-height: 24px;
>img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  pointer-events: none;
}
h2 {
  font-size: 16px;
}

`

