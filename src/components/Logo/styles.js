import styled from "styled-components"

export const Container = styled.div`
display: flex;
height: fit-content;
align-items: center;

div.flex{

    display: flex;

    align-items: center;
    
    @media (min-width: 1000px) {
        position: relative;    
        flex-direction: column;    
    }
}
div.main {
    display: flex;
    height: fit-content;
    align-items: center;
    h1{
        margin-left: 8px;
    }
    svg{
        height: 24px;
        width: 24px;
    }
    
    }
    @media (min-width: 1000px) {
        
        svg{
            height: 30px;
            width: 30px;
        }
    }


h1 {
    color: ${({theme}) => theme.COLORS.Light_100};
    text-align: center;
    font-family: Roboto;
    font-size: 21px;
    font-weight: 700;
    width: max-content;
    margin-bottom: 0;
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
    
    @media (min-width: 1000px) {
        position: absolute;
        right: 0;
        margin-top: 26px; 
    }

}
`