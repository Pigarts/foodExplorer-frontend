import { styled }  from "styled-components";

export const Content = styled.div`
width: 100%;
span {
  
    color: ${({theme}) => theme.COLORS.Light_400};
}
`

export const Container = styled.div`

display: flex;
align-items: center;
background-color: ${({theme}) => theme.COLORS.Dark_800};
border-radius: 10px;

padding-right: 12px;
margin-top: 8px;
margin-bottom: 8px;

>svg {
    margin-left: 16px;
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
