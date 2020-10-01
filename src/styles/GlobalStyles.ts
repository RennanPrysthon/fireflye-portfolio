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
    color: var(--dark-font);
    -webkit-font-smoothing: antialiased !important;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--dark-font)
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  :root {
    --color-primary: #ED1C24;
    --color-secondary: #ffe7aa;

    --dark-font: #222;
    --light-font: #eee;
  }
`;
