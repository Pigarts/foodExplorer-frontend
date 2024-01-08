import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 100svw;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.Dark_400};
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100svw')};
  transition: left 0.3s ease;
  z-index: 5;

  scroll-behavior: none;
`;

export const Button = styled.button`

  background: none;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 6;

  display: flex;
  align-items: center;
  gap: 16px;

  span{
      color: ${({theme}) => theme.COLORS.Light_100};
      font-family: Roboto;
      font-size: 21px;
      font-weight: 400;
  }
`;

export const Color = styled.div`
background-color: ${({theme}) => theme.COLORS.Dark_700};
height: 114px;

`
export const Content = styled.div`
 padding: 24px 36px;

 ul {
  list-style: none;
 }

 a{
    display: flex;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.Dark_1000};
 }

 span{
     font-family: Poppins;
     font-size: 24px;
     font-weight: 300;
     line-height: 33.6px;
     color: ${({theme}) => theme.COLORS.Light_300};

 }
`