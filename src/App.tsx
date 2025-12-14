import { HashRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import ProjectDemo from './components/ProjectDemo'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project" element={<ProjectDemo />} />
      </Routes>
    </HashRouter>
  )
}

export default App
