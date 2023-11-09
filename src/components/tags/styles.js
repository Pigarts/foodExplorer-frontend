import  styled  from "styled-components";

export const Container = styled.span`
padding: 4px 8px;
font-size: 12px;
border-radius: 5px;
color: ${({theme}) => theme.COLORS.Light_100};
background-color: ${({theme}) => theme.COLORS.Dark_1000};

text-align: center;
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;
`
