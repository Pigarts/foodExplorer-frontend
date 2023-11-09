import styled from "styled-components";




export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background-color: ${({theme}) => theme.COLORS.Dark_200};
  position: relative;
  .like{
    position: absolute;
    top: 16px;
    right: 16px;

  }
  `;
  export const CardImage = styled.img`
    height: 100%;
    width: 100%;
  `;
    export const ImgButton = styled.button`
    background: none;
    border: none;
    height: 88px;
    width: 88px;
  `;

export const CardTitle = styled.h2`
  width: 162px;
  
  color: ${({theme}) => theme.COLORS.Light_300};
  font-family: Poppins;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const CardDescription = styled.p`
  width: 124px;

  color: ${({theme}) => theme.COLORS.Cake_200};
  font-family: Roboto;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
`;



