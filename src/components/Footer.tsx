const socials = [
  { url: 'https://t.me/danokhlopkov', icon: 'ri-telegram-fill' },
  { url: 'https://x.com/danokhlopkov', icon: 'ri-twitter-x-line' },
  { url: 'https://youtube.com/@danokhlopkov', icon: 'ri-youtube-fill' },
  { url: 'https://github.com/ohld', icon: 'ri-github-fill' },
  { url: 'https://www.linkedin.com/in/danokhlopkov/', icon: 'ri-linkedin-fill' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        {socials.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener">
            <i className={s.icon} />
          </a>
        ))}
      </div>
      <span className="footer-copy">© 2026 Даниил Охлопков</span>
    </footer>
  )
}
