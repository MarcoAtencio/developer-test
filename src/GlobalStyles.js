import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

}

:root{
    --color-white:white;
    --color-black:black;
    --color-black-900:#1A1A1A;
    --color-gray-100:  #ededed;
    --color-gray-500: #8D929A;
    --color-gray-700: #6B6E74;
    --color-red-200:#FFD5D5;
    --color-red-700:#9A0000;
    --color-shadow:rgba(0, 0, 0, 0.25);


}


html, body{
    background-color:  white;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

ul, li{
    list-style: none;
}


a {
    text-decoration: none;
    color: var(--title);
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    background: none;
}

#root {
    min-height: 100vh;
}

`;
