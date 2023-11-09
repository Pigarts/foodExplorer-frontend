import styled from "styled-components"

export const Container = styled.div`
display: flex;

flex-direction: column;

background-color: ${({theme}) => theme.COLORS.RED_1};
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
background-color: ${({theme}) => theme.COLORS.RED_1};
width: 100%;

`
export const FoodContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 62px;
margin-left: 24px;
background-color: ${({theme}) => theme.COLORS.RED_1};

`

export const Form = styled.form`
display: flex;
width: 100%;
flex-direction: column;
gap: 24px;

div.buttons {
    display: flex;
    gap: 32px;
    :nth-child(1){
        background-color: ${({theme}) => theme.COLORS.Dark_800};
    }
}


`

export const TagBox = styled.div`
width: auto;
display: flex;        
align-items: center;
justify-content: flex-start;
gap: 24px;
padding: 8px;   
overflow-y: hidden ;
overflow-x:  auto;
background-color: ${({theme}) => theme.COLORS.Dark_800};
`

export const ImgUpload = styled.div`
width: 100%;
height: 56px;
padding: 12px 32px;
border-radius: 10px;
margin-top: 8px;
margin-bottom: 8px;
background-color:  ${({theme}) => theme.COLORS.Dark_800};
cursor: pointer;
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