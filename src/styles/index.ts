import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#EAEAEA', // Cinza claro para boa legibilidade
  corFundo: '#121212', // Preto suave para um design elegante
  corPrincipal: '#5568FE', // Azul marcante e moderno
  corSecundaria: '#FF4F75', // Rosa vibrante para um toque de energia
  cinza: '#333',
  preta: '#111',
  branca: '#EEEEEE',
  verde:'#10ac84',

}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto};
  }

  body {
    background-color: ${cores.preta};
    padding-bottom: 80px;
    padding-top: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    
  
  }




    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`

export const Tag = styled.div`

`