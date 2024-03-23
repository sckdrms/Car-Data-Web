import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios를 설치해야 합니다: npm install axios

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 로드하는 함수
    const loadData = async () => {
      try {
        // 데이터베이스에서 데이터를 가져옵니다. 
        // 백엔드 엔드포인트와 통신하는 URL로 교체하세요.
        const response = await axios.get('/api/data'); 
        setData(response.data.slice(0, 10)); // 처음 10행만 저장
      } catch (error) {
        console.error('데이터를 가져오는데 실패했습니다.', error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>데이터 테이블</h2>
      <table>
        <thead>
          <tr>
            <th>Speed</th>
            <th>EngineLoad</th>
            {/* 여기에 필요한 나머지 헤더를 추가하세요 */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Speed}</td>
              <td>{row.EngineLoad}</td>
              {/* 여기에 해당하는 데이터 셀을 추가하세요 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
