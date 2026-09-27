import React, { useState } from 'react';

const ControlledInput = () => {
  const [text, setText] = useState('');

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">2. Controlled Input Field</h5>
      <div className="my-auto">
        <input 
          type="text" 
          className="form-control text-center mx-auto mb-3"
          style={{ maxWidth: '300px' }}
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h3 className="fw-bold">Input text: {text}</h3>
      </div>
    </div>
  );
};

export default ControlledInput;