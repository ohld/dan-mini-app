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
        initData: string
        platform: string
        BackButton: {
          show: () => void
          hide: () => void
          onClick: (cb: () => void) => void
          offClick: (cb: () => void) => void
        }
      }
    }
    __IS_TMA__?: boolean
  }
}

// Detect if running inside Telegram Mini App (not just having the SDK loaded)
// initData is non-empty only when opened from Telegram
window.__IS_TMA__ = !!(window.Telegram?.WebApp?.initData)

// Clean up Telegram's query params from the hash before React Router sees it
// Telegram opens: /dan-mini-app/#tgWebAppData=... which HashRouter reads as a route
if (window.location.hash && window.location.hash.includes('tgWebApp')) {
  window.location.hash = '#/'
}

if (window.__IS_TMA__) {
  const tg = window.Telegram!.WebApp!
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
