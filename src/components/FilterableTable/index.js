import React, { useState, useEffect } from 'react';

// 예시 데이터
const initialData = [
  { id: 1, name: 'Alice', age: 30, job: 'Engineer' },
  { id: 2, name: 'Bob', age: 25, job: 'Designer' },
  { id: 3, name: 'Charlie', age: 35, job: 'Teacher' },
  // 데이터의 나머지 부분
];

const FilterableTable = () => {
  const [data, setData] = useState(initialData); // 테이블 데이터
  const [filter, setFilter] = useState(''); // 필터링 조건

  useEffect(() => {
    // 필터링 조건에 따라 데이터 업데이트
    const filteredData = initialData.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
    setData(filteredData);
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="검색..."
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
            <th>ddddd</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.job}</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
              <td>aaaaa</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterableTable;
