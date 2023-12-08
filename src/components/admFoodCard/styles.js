import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.Dark_200};
  position: relative;

  height: 462px;
  width: 304px;
  
  .edit{
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;

  }
  @media (max-width: 999px) {
    height: 292px;
    width: 210px;
    gap: 12px;
 }


 
  `;
  export const CardImage = styled.img`
      height: 176px;
      width: 176px;

    @media (max-width: 999px) {
      height: 88px;
      width: 88px;
  }
`;
  export const ImgButton = styled.button`
  background: none;
  border: none;
`;


export const CardTitle = styled.h2`
  width: 100%;
  color: ${({theme}) => theme.COLORS.Light_300};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  text-align: center;

  @media (max-width: 999px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const CardDescription = styled.p`
  width: 100%;

  color: ${({theme}) => theme.COLORS.Light_400};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  text-overflow: clip;
  @media (max-width: 999px) {
      display: none;
  }
`;

export const CardPrice = styled.p`
  width: 124px;

  color: ${({theme}) => theme.COLORS.Cake_200};
  font-family: Roboto;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
`;



