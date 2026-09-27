import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">1. Simple Counter</h5>
      <div className="my-auto">
        <button 
          className="btn btn-light px-4 py-2 fw-semibold mb-3"
          onClick={() => setCount(prev => prev + 1)}
        >
          Increment
        </button>
        <h2 className="fw-bold">Count: {count}</h2>
      </div>
    </div>
  );
};

export default Counter;