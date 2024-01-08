import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 

}
body {
    background-color: ${({theme}) => theme.COLORS.Dark_400};
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
    width: 4px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
  margin-top: 35px;
  margin-left: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${({theme}) => theme.COLORS.Dark_1000};
  border-radius: 8px;
}


`;