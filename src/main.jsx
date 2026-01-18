import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './context/ScrollToTop.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
