const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const scheduleRouter = require('./routes/ScheduleRoutes');

const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/schedule', scheduleRouter);

const path = require('path');
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDistPath));

const PORT = process.env.PORT || 6611;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});