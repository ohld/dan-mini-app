import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { AICourse } from './pages/AICourse'
import { ClosedChannel } from './pages/ClosedChannel'
import { WorkTogether } from './pages/Ads'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/ai-course" element={<AICourse />} />
      <Route path="/closed" element={<ClosedChannel />} />
      <Route path="/work-together" element={<WorkTogether />} />
    </Routes>
  )
}

export default App
