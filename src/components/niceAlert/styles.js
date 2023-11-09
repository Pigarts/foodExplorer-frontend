import styled from "styled-components";

export const Container = styled.header`


span{
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  
  width: 100%;
  height: 40px;
  padding: 10px;
  
  color: ${({theme}) => theme.COLORS.Light_100};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  transition: opacity 0.3s, height 0.3s;
  opacity: 0;
  height: 0;
}
&.bad {
  span {
    opacity: 1;
    height: 40px;
    background-color: ${({theme}) => theme.COLORS.Mint_100};
    }
  }
`




