import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

const Posts = lazy(() => import('./pages/Posts').then(m => ({ default: m.Posts })))
const AICourse = lazy(() => import('./pages/AICourse').then(m => ({ default: m.AICourse })))
const ClosedChannel = lazy(() => import('./pages/ClosedChannel').then(m => ({ default: m.ClosedChannel })))
const WorkTogether = lazy(() => import('./pages/Ads').then(m => ({ default: m.WorkTogether })))

function App() {
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
