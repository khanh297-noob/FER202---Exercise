import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-4 text-center mb-4 shadow-sm" style={{ maxWidth: '320px' }}>
      <h5 className="card-title text-secondary">Counter Application</h5>
      <h2 className="display-4 fw-bold my-3">{count}</h2>
      <div className="d-flex justify-content-center gap-2">
        <button 
          className="btn btn-danger px-3 fw-bold" 
          onClick={() => setCount(count - 1)}
        >
          - Giảm
        </button>
        <button 
          className="btn btn-secondary px-3" 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button 
          className="btn btn-success px-3 fw-bold" 
          onClick={() => setCount(count + 1)}
        >
          + Tăng
        </button>
      </div>
    </div>
  );
};

export default Counter;