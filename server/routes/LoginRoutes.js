const express = require('express');
const { loginUser } = require('../controllers/LoginController');

const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: 로그인
 *     tags: [Auth]
 *     description: 사용자 로그인을 진행합니다.
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
 *       200:
 *         description: 로그인 성공
 *       400:
 *         description: 입력값 오류
 *       401:
 *         description: 로그인 실패
 */

router.post('/', loginUser);

module.exports = router;