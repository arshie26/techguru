import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TameYourTech from './pages/tameyourtech'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<TameYourTech />} />
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
