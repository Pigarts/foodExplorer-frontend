import styled from "styled-components"

export const Container = styled.div`
.IconBox {
    position: relative;
    width: 38px;
    height: 38px;
    >svg {
        width: 32px;
        height: 32px; 
    }
}
.SpanBackground{
    z-index: 1;
    background-color: ${({theme}) => theme.COLORS.Tomato_100}; 
    position: absolute;
    top: -10%;
    right: 0;

    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 99px; 
    >span {
    color: ${({theme}) => theme.COLORS.Light_100};
}
}
`
