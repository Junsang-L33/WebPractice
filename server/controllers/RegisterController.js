// 예시 로직 (Express + bcrypt)
const bcrypt = require('bcrypt');
const db = require('../config/db');

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 입력값 검증
    if (!username || !password) {
      return res.status(400).json({ error: '아이디와 비밀번호를 모두 입력하세요.' });
    }

    // 1. 중복 확인
    const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existing.length > 0) {
      return res.status(409).json({ error: '이미 존재하는 사용자명입니다.' });
    }

    // 2. 비밀번호 해시 및 저장
    const hashed = await bcrypt.hash(password, 10);
    await db.query(
      'INSERT INTO users (username, password, created_at, updated_at) VALUES (?, ?, NOW(), NOW())',
      [username, hashed]
    );

    res.status(201).json({ message: '회원가입 완료!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '서버 오류' });
  }
};

module.exports = { registerUser };