import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 100svw;
height: 100vh;
`

export const Content = styled.div`
padding:  34px 123px ;
display: flex;
flex-direction: row;
justify-content: space-evenly;
gap: 116px;
height: 100%;
width: 100%;
div.orders, div.payment {
  >h2 {
    margin-bottom: 32px;
    color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
}

div.payment{
  @media (max-width: 999px) {
    display: none;
    
  }
}

div.center{
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  align-items: center;
  >h2 {
    color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
}

`


export const FoodContainer = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
>p{
    color: ${({theme}) => theme.COLORS.Light_300};
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }

  button.next{
    place-self: end;
    max-width: 216px;
    @media (min-width: 999px) {
    display: none;
    
  }
  }
`

export const FoodCard = styled.div`
display: flex;
align-items: center;
gap: 13px;
>img {
  cursor: pointer;
  width: 100px;
  height: 100px;
}

div.cardLine{
  div{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p{
    color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }

  span{
    color: ${({theme}) => theme.COLORS.Light_400};
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  button{
    color: ${({theme}) => theme.COLORS.Tomato_400};
  }
}
`