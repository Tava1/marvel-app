import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%; 
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%; 
  }
}

body {
  background: #F9F9F9;
  color: #0A0F0D;
}

body, button {
  font: 400 1rem Roboto, sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

`;