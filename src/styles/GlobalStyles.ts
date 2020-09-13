import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,200&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Josefin Sans', sans-serif;
    background:#f9f9f9;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ol, ul {
    list-style: none;
  }

`
