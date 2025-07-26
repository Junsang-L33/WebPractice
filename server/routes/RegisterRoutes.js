const express = require('express');
const { registerUser } = require('../controllers/RegisterController');

const router = express.Router();
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: 회원가입
 *     tags: [Auth]
 *     description: 새로운 사용자를 등록합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 완료
 *       400:
 *         description: 입력값 오류
 *       409:
 *         description: 이미 존재하는 사용자명
 */
router.post('/', registerUser);

module.exports = router;