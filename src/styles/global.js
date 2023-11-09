import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 

}
body {
    background-color: ${({theme}) => theme.COLORS.Dark_400};
    color: ${({theme}) => theme.COLORS.WHITE_1};

}

a {
    text-decoration: none;
}

a, button{
    cursor: pointer;
    transition: filter 0.2s;
}

a:hover, button:hover{
filter: brightness(0.9);
}

/* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
  margin-top: 35px;
  margin-left: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.COLOR_1};
  border-radius: 8px;
}


`;