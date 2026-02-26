/** Open a URL using Telegram native methods (in TMA) or window.open (outside). */
export function openUrl(url: string) {
  if (window.__openUrl__) {
    window.__openUrl__(url)
  } else {
    window.open(url, '_blank')
  }
}
