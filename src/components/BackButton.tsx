import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()
  return (
    <button className="back-nav" onClick={() => navigate('/')}>
      <i className="ri-arrow-left-line" />
      <span>Назад</span>
    </button>
  )
}
