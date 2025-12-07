import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import ProjectDemo from './components/ProjectDemo'

function App() {
  return (
    <BrowserRouter basename="/portfolio/portfoliozip/">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project" element={<ProjectDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
