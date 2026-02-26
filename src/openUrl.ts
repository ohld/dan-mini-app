import { trackClick } from './analytics'

/** Open a URL using Telegram native methods (in TMA) or window.open (outside). */
export function openUrl(url: string, category = 'outbound', label = '') {
  trackClick(category, label || url, url)
  if (window.__openUrl__) {
    window.__openUrl__(url)
  } else {
    window.open(url, '_blank')
  }
}
