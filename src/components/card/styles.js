import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
align-items: center;
`

export const CardBackground = styled.div`
bottom: 0;
display: flex;
width: 100%;
min-width: 380px;
height: 120px;

border: none;
border-radius: 2.917px;
position: relative;

background: var(--gradients-200, linear-gradient(180deg, ${({theme}) => theme.COLORS.Gradients_200}  0%, ${({theme}) => theme.COLORS.Gradients_100} 130%));

@media (min-width: 999px) {
  height: 260px;

  }
`;

export const CardContent = styled.div`
display: flex;
flex: 1;
position: absolute;
bottom: 0;
left: -30px;

height: 120px;
@media (min-width: 999px) {
  height: 260px;

  }
`

export const CardImage = styled.img`
  margin-top: -10%; 
 
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  @media (min-width: 999px) {
    align-items: center;
    text-align: center;
    width: 532px;
    
  }
`;

export const CardTitle = styled.h2`
  width: 215px;
 
  font-family: Poppins;
  font-size: 1.5rem;
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  color: ${({theme}) => theme.COLORS.Light_300};

  @media (min-width: 999px) {
    font-size: 40px;
    font-weight: 500;
    width: 100%;

  }
`;

export const CardDescription = styled.p`
  width: 202px;
  font-size: 1rem;
  color: ${({theme}) => theme.COLORS.Light_300};
  font-family: Poppins;;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;

  @media (min-width: 999px) {
    font-size: 14px;
    line-height: 100%; 
    width: 100%;
  }
  
`;