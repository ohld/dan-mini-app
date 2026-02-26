import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Initialize Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void
        expand: () => void
        setHeaderColor: (color: string) => void
        setBackgroundColor: (color: string) => void
      }
    }
  }
}

// Clean up Telegram's query params from the hash before React Router sees it
// Telegram opens: /dan-mini-app/#tgWebAppData=... which HashRouter reads as a route
if (window.location.hash && window.location.hash.includes('tgWebApp')) {
  window.location.hash = '#/'
}

const tg = window.Telegram?.WebApp
if (tg) {
  tg.ready()
  tg.expand()
  tg.setHeaderColor('#F5F5F0')
  tg.setBackgroundColor('#F5F5F0')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
