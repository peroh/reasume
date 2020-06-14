import * as React from 'react'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #141821;
  }
`

const DefaultLayout = ({ children }: any) => (
  <React.Fragment>
    <GlobalStyle />
    <div>{children}</div>
  </React.Fragment>
)

export default DefaultLayout
