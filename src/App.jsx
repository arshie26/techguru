import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TameYourTech from './pages/tameyourtech'
import TheJoieLab from './pages/thejoielab'
import Speaker from './pages/SpeakerPage'
import TechAudit from './pages/TechAudit'
import Homepage from './pages/Homepage'
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
          <Route path="/" element={<Homepage />} />
          <Route path='/tameyourtech' element={<TameYourTech />} />
          <Route path="/joielab" element={<TheJoieLab />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/audit" element={<TechAudit />} />

        </Routes>
      </Router>

      
    </div>
  )
}

export default App
