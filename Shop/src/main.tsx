import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { ProductProvider } from './ProductContext.jsx'
import "./i18n"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
)
