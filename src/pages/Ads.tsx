import { BackButton } from '../components/BackButton'
import { Footer } from '../components/Footer'

export function WorkTogether() {
  return (
    <div className="page">
      <div className="subpage-header">
        <BackButton />
        <h1 className="subpage-title">Го поработаем</h1>
        <p className="subpage-subtitle">Консалтинг, реклама, коллабы</p>
      </div>

      {/* Consulting */}
      <div className="section-label">
        <span>Консалтинг</span>
        <div className="section-label-line" />
      </div>

      <div className="info-card">
        <p>
          Могу помочь с:<br />
          • Создание стартапов и продуктов<br />
          • Web3 и TON экосистема<br />
          • Экосистема Telegram, Telegram Ads<br />
          • Big Data, парсинг, аналитика
        </p>
      </div>

      <a
        href="https://www.linkedin.com/in/danokhlopkov/"
        target="_blank"
        rel="noopener"
        className="about-card"
      >
        <div className="nav-row-content">
          <span className="nav-row-title">LinkedIn</span>
          <span className="nav-row-subtitle">Весь опыт и бэкграунд</span>
        </div>
        <i className="ri-arrow-right-up-line" style={{ fontSize: 18, opacity: 0.3 }} />
      </a>

      {/* Ads */}
      <div className="section-label">
        <span>Реклама в канале</span>
        <div className="section-label-line" />
      </div>

      <div className="info-card">
        <p className="info-card-price">$1 200</p>
        <p>
          Только нативная реклама. Сам изучаю продукт и пишу своими словами.
        </p>
      </div>

      <div className="info-card">
        <p>
          ✓ До 1000 символов + 5 картинок или 1 видео<br />
          ✓ Пометка #реклама<br />
          ✗ Скам, пирамиды, казино
        </p>
      </div>

      <div className="info-card">
        <p>
          <strong>Оплата:</strong> полная предоплата<br />
          • Крипта: USDT, USDC, TON<br />
          • Банк: EUR/USD по инвойсу<br />
          • Рубли переводом на карту
        </p>
      </div>

      <a
        href="https://t.me/danokhlopkov?direct"
        target="_blank"
        rel="noopener"
        className="cta-btn"
      >
        <span>Написать в ТГ</span>
        <i className="ri-arrow-right-up-line" style={{ fontSize: 20 }} />
      </a>

      <Footer />
    </div>
  )
}
