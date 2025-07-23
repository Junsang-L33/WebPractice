import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function groupByMeetingKey(data) {
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.meeting_key]) grouped[item.meeting_key] = [];
    grouped[item.meeting_key].push(item);
  });
  return grouped;
}

function ScheduleYearPage() {
  const { year } = useParams();
  const [scheduleData, setScheduleData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:6611/api/schedule?year=${year}`)
      .then((res) => {
        setScheduleData(res.data)
      })
      .catch((err) => {
        console.error('❌ API 호출 실패:', err)
      })
  }, [year])

  const groupedData = groupByMeetingKey(scheduleData);

  return (
    <div className="schedule-wrapper">
      {Object.entries(groupedData).map(([meetingKey, sessions]) => (
        <div key={meetingKey} className="race-card">
          <h3>
            🏁 {sessions[0].country_name} ({sessions[0].location}) - {sessions[0].year}
          </h3>
          <ul>
            {sessions.map(item => (
              <li key={item.session_key} style={{ marginBottom: '1.5rem' }}>
                <strong>
                  {item.session_name} ({item.session_type}) : {item.circuit_short_name}
                </strong>
                <br />
                Location: {item.location}, {item.country_name} ({item.country_code})<br />
                Year: {item.year}<br />
                Start: {new Date(item.date_start).toLocaleString()}<br />
                End: {new Date(item.date_end).toLocaleString()}<br />
                Session Key: {item.session_key}<br />
                Meeting Key: {item.meeting_key}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ScheduleYearPage