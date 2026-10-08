import React, { useState } from 'react';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  // Khi click, state thay đổi kích hoạt quá trình Render & Reconciliation
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 mx-auto" style={{ maxWidth: '460px' }}>
      <h3 className="text-warning fw-bold mb-3">Render and Commit Demo</h3>
      
      <p className="fs-3 fw-semibold mb-4">
        Count: <span className="text-info">{count}</span>
      </p>

      <div>
        <button 
          className="btn btn-success btn-lg fw-semibold shadow-sm px-4"
          onClick={handleClick}
        >
          <i className="bi bi-arrow-repeat me-2"></i>
          Increment
        </button>
      </div>

      <div className="mt-4 p-3 rounded bg-secondary bg-opacity-25 text-start small text-light border border-secondary">
        <p className="mb-1 text-warning fw-bold"><i className="bi bi-info-circle me-1"></i> Cơ chế hoạt động:</p>
        <p className="mb-0">
          Khi nhấn <strong>Increment</strong>, React kích hoạt Render phase tạo ra Virtual DOM mới, so sánh sự khác biệt (diffing) và chỉ commit duy nhất số <code>{count}</code> lên Real DOM của trình duyệt.
        </p>
      </div>
    </div>
  );
};

export default RenderAndCommitDemo;