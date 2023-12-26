import styled from "styled-components"

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: space-between;



width: 100svw;
height: 77px;   
padding: 27px 30px;

background-color: ${({theme}) => theme.COLORS.Dark_600};
border: none;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;


div{
    display: flex;
    align-items: center;
    gap: 6px;
    svg{
    width: 22px;
    height: 18px;
    }
}

span{
    color: ${({theme}) => theme.COLORS.Light_700};
}

p{
    color: ${({theme}) => theme.COLORS.Light_200};
    text-align: right;
    font-family: DM Sans;
    font-size: 12px;
    font-weight: 400;
}
`