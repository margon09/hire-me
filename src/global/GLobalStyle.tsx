import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  :root {
    font-size: 1rem;
  }
    
  html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-size: 100%; 
    font-family: Arial, sans-serif;
    vertical-align: baseline;
    line-height: 1.25;
    background: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.mediaQueries.phone} {
      background: ${({ theme }) => theme.colors.formBackground};
    }
  }

  h1, h2, h3 {
    font-family: Helvetica, sans-serif;
  }
  
  h1{
    padding: 2rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 2.5;
    margin-bottom: 1rem;
    text-align: center;
  }
  h2{
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 1rem;
  }

  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin: 0 0.5rem;
  }
  ul li{
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin: 0;
  }
`