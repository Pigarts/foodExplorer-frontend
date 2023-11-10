import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

overflow-x: hidden;

width: 100svw;
height: 100svh;
h1 {
    color: ${({theme}) => theme.COLORS.Light_100};
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
    font-style: normal;
    
    margin-top: 24px;
    margin-bottom: 24px;
}
`
export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px 24px ;
`

export const Form = styled.form`
display: flex;
width: 100%;
flex-direction: column;
gap: 24px;

`

export const TagBox = styled.div`

background-color: ${({theme}) => theme.COLORS.Dark_800};

display: flex;        
align-items: center;
justify-content: flex-start;
padding: 8px;   
gap: 24px;
overflow-x:  auto;
`

export const ImgUpload = styled.div`

height: 56px;
padding: 12px 32px;
border-radius: 10px;
margin-top: 8px;
margin-bottom: 8px;
background-color:  ${({theme}) => theme.COLORS.Dark_800};
cursor: pointer;

&.done {
    background-color:  ${({theme}) => theme.COLORS.Dark_1000};
}

span {
    width: 300px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: ${({theme}) => theme.COLORS.Light_100};
}

label {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

   svg{
    height: 30px;
    width: 30px;
   }
}
input {
    display: none;
}
`