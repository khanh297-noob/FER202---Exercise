import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [color, setColor] = useState('transparent');

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">5. Color Switcher</h5>
      <div className="d-flex flex-column align-items-center my-auto">
        <select 
          className="form-select mb-3 text-center" 
          style={{ maxWidth: '200px' }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="transparent">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>

        {/* Ô đổi màu */}
        <div 
          className="border rounded-2 shadow-sm"
          style={{ 
            width: '140px', 
            height: '140px', 
            backgroundColor: color,
            borderColor: '#6c757d'
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorSwitcher;