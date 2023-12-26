import { styled }  from "styled-components";

export const Content = styled.div`
span {
    color: ${({theme}) => theme.COLORS.Light_400};
}
`

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color:  ${({theme}) => theme.COLORS.Dark_800};
border-radius: 10px;


margin-top: 16px;



>svg {
    margin-left: 16px;
}


>textarea {
    height: 172px;
    width: 100%;
    resize: none;
    padding: 14px;

    color: ${({theme}) => theme.COLORS.Light_100};
    background: transparent;
    outline: none;

    border: none;

    font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.Light_500};
    }
}
`