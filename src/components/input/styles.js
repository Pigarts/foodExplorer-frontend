import { styled }  from "styled-components";

export const Content = styled.div`
width: 100%;
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


margin-top: 8px;
margin-bottom: 8px;

>svg {
    margin-left: 16px;
}


>input {
    height: 56px;
    width: 100%;
    padding: 14px 16px;

    color: ${({theme}) => theme.COLORS.Light_100};
    background: transparent;
    outline: none;

    border: none;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.Light_500};
    }
}
`