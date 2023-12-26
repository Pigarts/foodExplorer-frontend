import { styled }  from "styled-components";


export const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
align-items: center;
border-radius: 10px;

background-color:  ${({theme}) => theme.COLORS.Dark_900};
>svg {
    margin-left: 16px;
}

>input {
    height: 56px;
    width: 100%;
    padding: 14px 12px;
    background: transparent;
    outline: none;
    border: none;
    color: ${({theme}) => theme.COLORS.Light_100};
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.Light_500};
    }
}
`

export const SearchBox = styled.div`
width: 98%;
height: fit-content;
background-color: ${({theme}) => theme.COLORS.Dark_600};
position: absolute;
overflow-y: auto;
display: flex;
flex-direction: column;
gap: 10px;
padding: 5px;
margin: 10px;
z-index: 7;
top: 60px;
left: 0;
 :hover{
    background-color: ${({theme}) => theme.COLORS.Dark_400};
 }
@media (min-width: 999px) {
    position: absolute;
    top: 107px;
    left: 0;
    width: 97%;
    min-width: max-content;
    padding-right: 10px;

}
`

export const FoodBox = styled.div`
display: flex;
align-items: center;
gap: 15px;
cursor: pointer;
padding-bottom: 10px;
border-bottom: 2px solid ${({theme}) => theme.COLORS.Dark_900};;
color: ${({theme}) => theme.COLORS.Light_100};
font-family: Poppins;
font-size: 12px;
font-weight: 500;
line-height: 24px;
>img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  pointer-events: none;
}
span {
    font-size: 14px;
}
h2 {
  font-size: 16px;
}

@media (min-width: 999px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    h2 {
        font-size: 14px;
}
}
`