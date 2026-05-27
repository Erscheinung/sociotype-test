import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { colors } from './components/utils/_var'
import { createGlobalStyle } from 'styled-components'
import { unregister } from './registerServiceWorker'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    background-color: ${colors.$colorBg};
    color: #fff;
  }

  body {
    margin: 0;
  }
`

const root = createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
)

unregister()
