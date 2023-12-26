import {styled} from "styled-components"

export const Container = styled.div`

display: flex;

background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.Light_600};
color: ${({theme}) => theme.COLORS.Light_100};
border: ${({theme, $isNew}) => $isNew ? `1px dashed ${theme.COLORS.Light_500}` : "none"};

border-radius: 10px;
padding-right: 16px;

>button {
    border: none;
    background: none;
}

.button-remove{
    color: ${({theme}) => theme.COLORS.Light_100};
}

.button-add{
    color: ${({theme}) => theme.COLORS.Light_500};
}

>input{ 
    min-width: 100px;
    width: 100px;
    padding: 10px 16px;
   
    color: ${({theme }) => theme.COLORS.Light_100};

    background: transparent;
    border: none;
    outline: none;

    
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    &::placeholder {
    color: ${({theme }) => theme.COLORS.Light_500};
    }
}
`