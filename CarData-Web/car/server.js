const mysql = require('mysql2');
const DB_CONFIG = require('./key'); // key.js 파일에서 설정 불러오기

// MySQL 데이터베이스 연결 설정
const pool = mysql.createPool({
  ...DB_CONFIG, // 스프레드 문법을 사용하여 DB_CONFIG 객체의 속성을 여기에 펼칩니다.
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 프로미스 방식으로 사용하기 위한 wrapper 생성
const promisePool = pool.promise();

// 연결 테스트
promisePool.getConnection()
  .then(connection => {
    console.log('DB Connection Successful!');
    connection.release(); // 연결 성공 시, 연결을 해제합니다.
  })
  .catch(error => {
    console.error('DB Connection Failed:', error);
  });
