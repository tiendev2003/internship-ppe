import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '../src/style/slick-theme.css' 
import '../src/style/slick.css' 
import App from './App.tsx'
import 'react-multi-carousel/lib/styles.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
