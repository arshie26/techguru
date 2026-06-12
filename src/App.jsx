import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TameYourTech from './pages/tameyourtech'
import TechWhisperer from './pages/TechWhisperer'
import TheJoieLab from './pages/thejoielab'
import Speaker from './pages/SpeakerPage'
import TechTalk from './pages/TechTalk'
import DWY from './pages/TechTalk2'
import TechAudit from './pages/TechAudit'
import Homepage from './pages/Homepage'
import InboxRescue from './pages/InboxRescue'
import ChristmasAudit from './pages/ChristmasAudit'
import Disclaimer from './pages/Disclaimer'
import Privacy from './pages/PrivacyPolicy'
import Terms from './pages/TermsOfService'
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
          <Route path='/techwhisperer' element={<TechWhisperer />} />
          <Route path="/joielab" element={<TheJoieLab />} />
          <Route path="/inboxrescue" element={<InboxRescue />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/salespageworkshop" element={<TechTalk />} />
          <Route path="/dwyworkshop" element={<DWY />} />
          <Route path="/audit" element={<TechAudit />} />
          <Route path="/christmasaudit" element={<ChristmasAudit />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsofservice" element={<Terms />} />
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
