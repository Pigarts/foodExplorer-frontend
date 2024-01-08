import styled from "styled-components"

export const Container = styled.div`
width: 530px;

div.method {
  border-radius: 8px 8px 0 0;
  border: 2px solid ${({theme}) => theme.COLORS.Light_600};
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  background: none;
  color: ${({theme}) => theme.COLORS.Light_100};
  
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  
  margin-bottom: 0;

  button.card{
  border-radius: 0 8px 0 0;

    background-color: ${({theme}) => theme.COLORS.Dark_500};
    border-left: 2px solid ${({theme}) => theme.COLORS.Light_600};
  }

  button.pix {
  border-radius: 8px 0 0 0;

    background-color: ${({theme}) => theme.COLORS.Dark_500};
    border-right: 2px solid ${({theme}) => theme.COLORS.Light_600};
  }
  
  button.selected {
    background-color: ${({theme}) => theme.COLORS.Dark_800};
   }
}

div.payment{
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 47px;


  >img{
    height: 250px;
    width: 250px;
    filter: brightness(.4);
  }

  div.credit{
    display: flex;
    flex-direction: column;
    >div.line{
      margin: 37px 0 37px;
      display: flex;
      flex-direction: row;
      gap: 17px;
    }
    input{
      &:focus {
        border: 1px solid ${({theme}) => theme.COLORS.Light_100};
  
    }
    }
  }
  border-bottom: 2px solid ${({theme}) => theme.COLORS.Light_600};
  border-left: 2px solid ${({theme}) => theme.COLORS.Light_600};
  border-right: 2px solid ${({theme}) => theme.COLORS.Light_600};
  border-radius: 0 0 8px 8px;

  div.status {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    padding: 71px 0 ;
    >h3 {
      color: ${({theme}) => theme.COLORS.Light_600};
      text-align: center;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%
    }
  }
}
`  
  
export const Content = styled.div`
@media (max-width: 999px) {
  
}

margin-top: 24px;
display: flex;
flex-direction: row;
gap: 16px;

height: fit-content;   
overflow-x: auto;
scroll-behavior: smooth;
`