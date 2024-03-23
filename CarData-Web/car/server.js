const mysql = require('mysql2');

// MySQL 데이터베이스 연결 설정
const pool = mysql.createPool({
    host: 'localhost', // 데이터베이스 호스트 주소
    user: 'your_username', // 데이터베이스 사용자 이름
    password: 'your_password', // 데이터베이스 비밀번호
    database: 'your_database_name', // 사용할 데이터베이스 이름
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 프로미스 방식으로 사용하기 위한 wrapper 생성
const promisePool = pool.promise();
