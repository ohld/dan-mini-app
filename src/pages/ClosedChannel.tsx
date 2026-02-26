import { BackButton } from '../components/BackButton'
import { Footer } from '../components/Footer'
import { ArrowRightUpIcon } from '../components/Icons'
import { openUrl } from '../openUrl'

export function ClosedChannel() {
  return (
    <div className="page">
      <div className="subpage-header">
        <BackButton />
        <h1 className="subpage-title">Закрытый канал</h1>
        <p className="subpage-subtitle">Живое сообщество без AI-слопа</p>
      </div>

      <div className="info-card">
        <p>
          Везде AI-слоп, рерайты и мёртвые чаты. Люди органически
          объединяются в закрытые сообщества с живыми людьми — это одно из таких.
        </p>
        <p style={{ marginTop: 16 }}>
          Внутри: AI / web3 / TG+TON фаундеры и билдеры.
          Быстрые мысли, находки, прогресс по проектам.
          Периодически случаются крупные интро и B2B продажи между участниками.
        </p>
      </div>

      <div className="section-label">
        <span>Подписаться</span>
        <div className="section-label-line" />
      </div>

      <div className="course-section">
        <div
          className="course-entry"
          onClick={() => openUrl('https://t.me/+A-8hgEh5_7g3NTIy')}
          role="link"
        >
          <p className="course-entry-quote">⭐ Telegram Stars</p>
          <p className="course-entry-context">Подписка через Telegram</p>
        </div>
        <div
          className="course-entry"
          onClick={() => openUrl('https://t.me/xrocket?start=sb_RdKkdVaJ2vp44Cb')}
          role="link"
        >
          <p className="course-entry-quote">₿ Крипта</p>
          <p className="course-entry-context">Через xRocket (USDT, TON)</p>
        </div>
        <div
          className="course-entry"
          onClick={() => openUrl('https://t.me/tribute/app?startapp=ssaB')}
          role="link"
        >
          <p className="course-entry-quote">💳 Карта / Валюта</p>
          <p className="course-entry-context">Через Tribute (RUB, USD, EUR)</p>
        </div>
      </div>

      <div
        className="cta-btn"
        onClick={() => openUrl('https://t.me/danokhlopkov/1575')}
        role="link"
      >
        <span>Подробнее про канал</span>
        <ArrowRightUpIcon size={20} />
      </div>

      <Footer />
    </div>
  )
}
