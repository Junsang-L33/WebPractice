const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const scheduleRouter = require('./routes/ScheduleRoutes');
const registerRouter = require('./routes/RegisterRoutes');
const loginRouter = require('./routes/LoginRoutes');

dotenv.config();
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Swagger 옵션
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ToyWeb API',
      version: '1.0.0',
      description: 'ToyWeb 프로젝트 API 문서',
    },
    servers: [
      { url: 'http://localhost:6611' }
    ],
    tags: [
      { name: 'Auth', description: '회원가입 및 로그인 관련 API' },
      { name: 'Schedule', description: '스케줄 관련 API' }
    ],
  },
  
  apis: ['./routes/*.js'], // 라우터 파일에 Swagger 주석 작성
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/api/schedule', scheduleRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);

const path = require('path');
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDistPath));

const PORT = process.env.PORT || 6611;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});