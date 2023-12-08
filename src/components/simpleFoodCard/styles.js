import styled from "styled-components";

export const CardContent = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 16px  0 ;

  width: fit-content;
  height: fit-content;


  div.column {
    margin-left: 16px;
    display: flex;
    flex-direction: column;

    h2{
      text-align: left; 
    }

    button {
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      color: ${({theme}) => theme.COLORS.Tomato_400}
    }

  }
  @media (max-width: 999px) {
    gap: 12px;

  }
  `;

  export const CardImage = styled.img`
      height: 100px;
      width: 100px;
  `;
  
    export const ImgButton = styled.button`
    background: none;
    border: none;
   
  `;

export const CardTitle = styled.h2`
  width: 100%;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 160%; 
  text-align: center;
  color: ${({theme}) => theme.COLORS.Light_300};
  `;
