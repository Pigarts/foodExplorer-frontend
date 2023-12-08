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
span {
    color: ${({theme}) => theme.COLORS.Light_400};
}

div.line1, div.line2 {
    display: flex;
    flex-direction: column;
gap: 14px;
} 

div.ingredients {
    display: flex;
    flex-direction: column;
    gap: 16px;

}
@media (min-width: 999px) {
    >div.line1 {
        display: flex;
        flex-direction: row;
        align-items: end;
        width: 100%;
        gap: 32px;
        >:nth-child(3) {
         min-width: 364px;
   
      }
   }
   >div.line2 {
      width: 100%;
        display: flex;
        flex-direction: row;
        align-items: end;
        width: 100%;
        gap: 32px;
        div.ingredients {
          width: 100%;
        }
        >:nth-child(2) {
       width: 351px;
      }
   }
   >div.line3 {
        width: 100%;
        display: flex;
        flex-direction: row;
        
        width: 100%;
        gap: 32px;
        >:nth-child(1) {
           width: 200px;
           white-space: nowrap;
      overflow: hidden;
        }
       
   }

   >div.buttons {
    display: flex;
    gap: 32px;
    flex-direction: row;
    justify-content: center;
    button{ 
        width: 190px;
    }
    >:nth-child(1) {
          background-color: ${({theme}) => theme.COLORS.Dark_800};
        }
   }
}
>div.buttons {
    display: flex;
    gap: 32px;
    flex-direction: row;
    justify-content: flex-end;
    >:nth-child(1) {
          background-color: ${({theme}) => theme.COLORS.Dark_800};
        }
   }
`

export const TagBox = styled.div`

background-color: ${({theme}) => theme.COLORS.Dark_800};
width: 100%;
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
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: ${({theme}) => theme.COLORS.Light_100};
}

label {

    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
   
    svg{
        height: 30px;
        width: 30px;
    }
    >:nth-child(3) {
       display: none;
    }

}
input {
    display: none;
}
`