import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-sm">
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Product Manager
        </Link>
        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <Link className="nav-link text-white fw-semibold" to="/">
            Home
          </Link>
          <Link className="nav-link text-white fw-semibold" to="/products">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;