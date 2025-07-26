const bcrypt = require('bcrypt');
const db = require('../config/db');

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 입력값 검증
    if (!username || !password) {
      return res.status(400).json({ error: '아이디와 비밀번호를 모두 입력하세요.' });
    }

    // 사용자 조회
    const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (users.length === 0) {
      return res.status(401).json({ error: '존재하지 않는 사용자입니다.' });
    }

    const user = users[0];

    // 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: '비밀번호가 일치하지 않습니다.' });
    }

    // 로그인 성공 (JWT 발급 등 추가 가능)
    res.status(200).json({ message: '로그인 성공', user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '서버 오류' });
  }
};

module.exports = { loginUser };