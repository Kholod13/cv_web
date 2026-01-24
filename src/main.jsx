import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights />
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
