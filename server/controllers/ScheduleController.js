const axios = require('axios');

exports.getSchedule = async (req, res) => {
  try {
    const { country_name, session_name, year } = req.query;

    const response = await axios.get('https://api.openf1.org/v1/sessions', {
      params: {
        country_name,
        session_name,
        year,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('❌ 일정 데이터 요청 실패:', error.message);
    res.status(500).json({ error: '일정 정보를 불러오지 못했습니다' });
  }
};