/** GA4 event helper. Sends gtag events if available, no-ops otherwise. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function send(event: string, params?: Record<string, string | number>) {
  if (window.gtag) {
    window.gtag('event', event, params)
  }
}

/** Track SPA page navigation */
export function trackPageView(path: string) {
  send('page_view', { page_path: path, page_title: document.title })
}

/** Track outbound link click */
export function trackClick(category: string, label: string, url: string) {
  send('click', { event_category: category, event_label: label, link_url: url })
}

/** Track share button */
export function trackShare() {
  send('share', { method: 'telegram', content_type: 'course' })
}

/** Track internal navigation */
export function trackNav(destination: string) {
  send('navigate', { destination })
}
