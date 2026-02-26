import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from './Icons'

const isTMA = window.__IS_TMA__
const tg = window.Telegram?.WebApp

export function BackButton() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isTMA || !tg?.BackButton) return

    tg.BackButton.show()
    const handler = () => navigate('/')
    tg.BackButton.onClick(handler)

    return () => {
      tg.BackButton.offClick(handler)
      tg.BackButton.hide()
    }
  }, [navigate])

  // In TMA — native back button handles it, hide the HTML one
  if (isTMA) return null

  return (
    <button className="back-nav" onClick={() => navigate('/')}>
      <ArrowLeftIcon size={18} />
      <span>Назад</span>
    </button>
  )
}
