import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { ArrowRightIcon, ArrowRightUpIcon } from '../components/Icons'

const navItems = [
  { path: '/posts', title: 'Топ посты', subtitle: 'Блог и мысли' },
  { path: '/ai-course', title: 'AI Agents курс', subtitle: 'На основе моих публикаций', badge: 'FREE' },
  { path: '/closed', title: 'Закрытый канал', subtitle: 'Сообщество' },
  { path: '/work-together', title: 'Го поработаем', subtitle: 'Консалтинг' },
]

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="page">
      {/* Header */}
      <header className="page-header">
        <h1 className="page-header-name">Даниил<br />Охлопков</h1>
        <div className="page-header-handle">
          <span className="page-header-dot" />
          <span className="page-header-mono">@danokhlopkov</span>
        </div>
        <p className="page-header-bio">
          Head of Analytics @ TON Foundation. Пишу про AI-агентов, данные и крипту.
        </p>
      </header>

      {/* Navigation */}
      <nav className="nav-border">
        {navItems.map((item) => (
          <button
            key={item.path}
            className="nav-row"
            onClick={() => navigate(item.path)}
          >
            <div className="nav-row-content">
              <span className="nav-row-title">{item.title}</span>
              <span className="nav-row-subtitle">{item.subtitle}</span>
            </div>
            <div className="nav-row-right">
              {item.badge && <span className="nav-row-badge">{item.badge}</span>}
              <ArrowRightIcon size={20} style={{ opacity: 0.3 }} />
            </div>
          </button>
        ))}
      </nav>

      <a
        href="https://www.youtube.com/watch?v=yJuzI2u-AnM"
        target="_blank"
        rel="noopener"
        className="content-card"
      >
        <div className="content-card-meta">
          <span>YOUTUBE</span>
          <span className="content-card-dot" />
          <span>30 ЯНВ 2026</span>
        </div>
        <p className="content-card-title">
          Позвал Мишу (@og_mishgun) показать его AI-сетап. Обсуждаем инструменты, которые реально используем каждый день.
        </p>
      </a>

      <a
        href="https://t.me/danokhlopkov/1552"
        target="_blank"
        rel="noopener"
        className="about-card"
      >
        <div className="nav-row-content">
          <span className="nav-row-title">Знакомство</span>
          <span className="nav-row-subtitle">Обо мне подробнее</span>
        </div>
        <ArrowRightUpIcon size={18} style={{ opacity: 0.3 }} />
      </a>

      <Footer />
    </div>
  )
}
