import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LoginContextProvider } from './contexts/LoginModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LoginContextProvider>
    <App />
  </LoginContextProvider>
  </React.StrictMode>,
)
