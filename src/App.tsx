import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

const postsImport = () => import('./pages/Posts').then(m => ({ default: m.Posts }))
const courseImport = () => import('./pages/AICourse').then(m => ({ default: m.AICourse }))
const closedImport = () => import('./pages/ClosedChannel').then(m => ({ default: m.ClosedChannel }))
const adsImport = () => import('./pages/Ads').then(m => ({ default: m.WorkTogether }))

const Posts = lazy(postsImport)
const AICourse = lazy(courseImport)
const ClosedChannel = lazy(closedImport)
const WorkTogether = lazy(adsImport)

// Preload all chunks after home page renders so subpages open instantly
function usePreloadChunks() {
  useEffect(() => {
    const preload = () => {
      postsImport()
      courseImport()
      closedImport()
      adsImport()
    }
    // requestIdleCallback not available in Telegram WebView (iOS)
    const id = typeof requestIdleCallback !== 'undefined'
      ? requestIdleCallback(preload)
      : setTimeout(preload, 100)
    return () => {
      typeof cancelIdleCallback !== 'undefined'
        ? cancelIdleCallback(id as number)
        : clearTimeout(id as number)
    }
  }, [])
}

function App() {
  usePreloadChunks()

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/ai-course" element={<AICourse />} />
        <Route path="/closed" element={<ClosedChannel />} />
        <Route path="/work-together" element={<WorkTogether />} />
      </Routes>
    </Suspense>
  )
}

export default App
