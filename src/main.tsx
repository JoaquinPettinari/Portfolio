import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
)
