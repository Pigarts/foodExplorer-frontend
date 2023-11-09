import styled from "styled-components"

export const Container = styled.div`
display: flex;
height: fit-content;
align-items: center;
div{
    display: flex;
    height: fit-content;
    align-items: center;
    gap: 8px;
    svg{
            height: 24px;
            width: 24px;
        }
    @media (min-width: 1000px) {
        gap: 10px;
        svg{
            height: 30px;
            width: 30px;
        }
  }
}

h1 {
    color: ${({theme}) => theme.COLORS.Light_100};
    text-align: center;
    font-family: Roboto;
    font-size: 21px;
    font-weight: 700;
    width: max-content;
    @media (min-width: 1000px) {
        font-size: 24px;
        
  }

}

span {
    color: ${({theme}) => theme.COLORS.Cake_200};
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-left: 8px;
    text-align: center;
}
`