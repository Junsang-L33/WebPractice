import { Link } from 'react-router-dom'

function SchedulePage() {
  const years = [2023, 2024, 2025]
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        {years.map(year => (
          <Link
            key={year}
            to={`/schedule/${year}`}
            className="year-card"
          >
            {year}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SchedulePage