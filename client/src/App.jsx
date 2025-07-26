import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SchedulePage from './pages/SchedulePage'
import ScheduleYearPage from './pages/ScheduleYearPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';


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
        <nav className="menu-bar" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logo-area">
            <Link to="/">
              <img src="/f1logo.svg" alt="F1 로고" style={{ height: '32px', verticalAlign: 'middle' }} />
            </Link>
          </div>
          <ul
            className="menu-list"
            style={{
              display: 'flex',
              gap: '100px',
              margin: 0,
              padding: 0,
              listStyle: 'none',
              flex: 1,
              alignItems: 'center'
            }}
          >
            <li><Link to="/schedule">Schedule</Link></li>
            <li>Results</li>
            <li>Drivers</li>
            <li style={{ marginLeft: 'auto', marginRight: '50px' }}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/schedule/:year" element={<ScheduleYearPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App