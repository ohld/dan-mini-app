import { TelegramIcon, TwitterXIcon, YoutubeIcon, GithubIcon, LinkedinIcon } from './Icons'

const socials = [
  { url: 'https://t.me/danokhlopkov', icon: <TelegramIcon /> },
  { url: 'https://x.com/danokhlopkov', icon: <TwitterXIcon /> },
  { url: 'https://youtube.com/@danokhlopkov', icon: <YoutubeIcon /> },
  { url: 'https://github.com/ohld', icon: <GithubIcon /> },
  { url: 'https://www.linkedin.com/in/danokhlopkov/', icon: <LinkedinIcon /> },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        {socials.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener">
            {s.icon}
          </a>
        ))}
      </div>
      <span className="footer-copy">© 2026 Даниил Охлопков</span>
    </footer>
  )
}
