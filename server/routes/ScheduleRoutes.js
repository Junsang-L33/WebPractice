const express = require('express');
const router = express.Router();
const { getSchedule } = require('../controllers/ScheduleController');
/**
 * @swagger
 * /api/schedule:
 *   get:
 *     summary: 전체 스케줄 조회
 *     tags: [Schedule]
 *     description: 모든 레이스 스케줄을 조회합니다.
 *     responses:
 *       200:
 *         description: 스케줄 목록 반환
 */

// F1 일정 정보를 가져오는 라우터
router.get('/', getSchedule);

module.exports = router;