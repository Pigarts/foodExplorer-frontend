import { styled }  from "styled-components";

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 16px;
span {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    color: ${({theme}) => theme.COLORS.Light_400};
}
`

export const Container = styled.div`
display: flex;
align-items: center;
background-color: ${({theme}) => theme.COLORS.Dark_800};
border-radius: 10px;
padding-right: 12px;
>svg {
    margin-left: 16px;
}
div.Pendente{
    margin-left: 12px; 
    width: 8px;
    height: 8px;
    background-color: ${({theme}) => theme.COLORS.Tomato_300};
    border-radius: 50%;
}
div.Preparando{
    margin-left: 12px; 
    width: 8px;
    height: 8px;
    background-color: ${({theme}) => theme.COLORS.Carrot_100};
    border-radius: 50%;
}
div.Entregue{
    margin-left: 12px;  
    width: 8px;
    height: 8px;
    background-color: ${({theme}) => theme.COLORS.Mint_100};
    border-radius: 50%;
}
>select {
    height: 56px;
    width: 100%;
    padding: 16px 13px;
    color: ${({theme}) => theme.COLORS.Light_100};
    background: transparent;
    outline: none;
    border: none;
    option{
        color: ${({theme}) => theme.COLORS.Light_400};
        
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;    
    }
    option:nth-child(even) {
        background-color: ${({theme}) => theme.COLORS.Dark_800};
    }
    option:nth-child(odd){
        background-color: ${({theme}) => theme.COLORS.Dark_900};
    }
}
`
export const Option = styled.option` 
   background-color: ${({theme}) => theme.COLORS.Dark_800};
   `;
