import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeComponent = () => {
  const { theme, currentTheme, toggleTheme } = useTheme();

  return (
    <div 
      className="p-4 rounded-3 text-center transition-all shadow-sm"
      style={{ 
        backgroundColor: theme.background, 
        color: theme.foreground,
        minHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h5 className="fw-bold mb-3">Exercise 1: Toggle Theme</h5>
      <p className="small mb-3">
        Current Theme: <span className="badge bg-secondary text-uppercase">{currentTheme}</span>
      </p>

      {/* Nút bấm theo style nút khối nổi như hình đề bài */}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          border: '2px solid #333333',
          boxShadow: '3px 3px 0px #000000',
          padding: '8px 24px',
          fontSize: '18px',
          fontWeight: '500',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeComponent;