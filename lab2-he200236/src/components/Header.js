import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ favoriteCount }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom border-secondary border-opacity-25">
      <h3 className="fw-bold mb-0">Mini Movie Manager</h3>
      <div className="d-flex align-items-center gap-3">
        <span className="badge bg-warning text-dark fs-6 d-flex align-items-center gap-1">
          <i className="bi bi-star-fill text-dark"></i> Yêu thích: {favoriteCount}
        </span>
        <button
          onClick={toggleTheme}
          className={`btn btn-sm ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} fw-semibold`}
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
  );
};

export default Header;