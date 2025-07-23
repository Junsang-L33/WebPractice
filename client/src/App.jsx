import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SchedulePage from './pages/SchedulePage'
import ScheduleYearPage from './pages/ScheduleYearPage'

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <img
        src="/MaxVerstappen.jpeg"
        alt="Max Verstappen"
        style={{
          width: '70vw',
          maxWidth: '900px',
          height: 'auto',
          borderRadius: '32px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.22)'
        }}
      />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="center-container">
        <nav className="menu-bar">
          <div className="logo-area">
            <Link to="/">
              <img src="/f1logo.svg" alt="F1 로고" style={{ height: '32px', verticalAlign: 'middle' }} />
            </Link>
          </div>
          <ul className="menu-list">
            <li><Link to="/schedule">Schedule</Link></li>
            <li>Results</li>
            <li>Drivers</li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/schedule/:year" element={<ScheduleYearPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App