import { styled }  from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
border-radius: 10px;

background-color:  ${({theme}) => theme.COLORS.Dark_900};
>svg {
    margin-left: 16px;
}

>input {
    height: 56px;
    width: 100%;
    padding: 14px 12px;
    background: transparent;
    outline: none;
    border: none;
    color: ${({theme}) => theme.COLORS.Light_100};
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.Light_500};
    }
}
`