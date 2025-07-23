const express = require('express');
const router = express.Router();
const { getSchedule } = require('../controllers/ScheduleController');

// F1 일정 정보를 가져오는 라우터
router.get('/', getSchedule);

module.exports = router;