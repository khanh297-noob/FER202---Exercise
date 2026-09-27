import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">3. Toggle Visibility</h5>
      <div className="my-auto">
        <button 
          className="btn btn-light px-4 py-2 fw-semibold mb-3"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <h2 className="fw-bold">Toggle me!</h2>}
      </div>
    </div>
  );
};

export default ToggleVisibility;