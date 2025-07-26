import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 로그인 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // 로그인 성공 시 원하는 동작 (예: 메인 페이지 이동)
        // localStorage.setItem('token', data.token); // 토큰 저장이 필요하다면
        navigate('/'); // 홈으로 이동
      } else {
        setError(data.error || '로그인에 실패했습니다.');
      }
    } catch (err) {
      setError('서버 오류가 발생했습니다.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: `url('/MaxVerstappen.jpeg') center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.95)',
          padding: '56px 48px',
          borderRadius: '24px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          minWidth: '380px',
          maxWidth: '95vw',
        }}
      >
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '24px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              background: '#e10600',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            Login
          </button>
        </form>
        {error && (
          <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
            {error}
          </div>
        )}
        <div style={{ marginTop: '18px', textAlign: 'center' }}>
          <Link
            to="/signup"
            style={{
              display: 'inline-block',
              padding: '10px 0',
              width: '100%',
              borderRadius: '8px',
              background: '#f3f3f3',
              color: '#e10600',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '16px',
              border: '1px solid #e10600',
              marginTop: '6px',
              marginLeft: '10px'
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;