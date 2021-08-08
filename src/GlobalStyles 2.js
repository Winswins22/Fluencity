import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
  }
`

export const Container = styled.div`
  z-index: 0;
  width: 350px; 
  height: 500px;
  
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  position: relative;
`

export default GlobalStyle