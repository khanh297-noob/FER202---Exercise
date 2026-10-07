import React, { useState } from 'react';

const EventHandlingDemo = () => {
  // 1. Quản lý trạng thái đếm số với useState
  const [count, setCount] = useState(0);

  // 2. Định nghĩa hàm xử lý sự kiện khi click chuột
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 mx-auto" style={{ maxWidth: '420px' }}>
      <h3 className="text-warning fw-bold mb-3">Event Handling Demo</h3>
      
      <p className="fs-3 fw-semibold mb-4">
        Count: <span className="text-info">{count}</span>
      </p>

      {/* Gắn sự kiện onClick gọi hàm handleButtonClick[cite: 13] */}
      <button 
        className="btn btn-primary btn-lg fw-semibold shadow-sm"
        onClick={handleButtonClick}
      >
        <i className="bi bi-hand-index-thumb me-2"></i>
        Increase Count
      </button>
    </div>
  );
};

export default EventHandlingDemo;