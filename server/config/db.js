const mysql = require("mysql2/promise");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
/*
console.log("DB ENV:", {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
*/
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.getConnection()
    .then(() => {
        console.log("✅ MySQL 연결 성공!");
    })
    .catch((err) => {
        console.error("❌ MySQL 연결 실패:", err.message);
    });

module.exports = db;