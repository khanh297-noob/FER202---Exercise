import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="card p-5 shadow-sm text-center border-0 rounded-4 bg-white">
      <h2 className="text-danger fw-bold mb-2">404 - Page Not Found</h2>
      <p className="text-muted mb-4">The URL you entered does not exist.</p>
      <div>
        <Link to="/" className="btn btn-primary fw-semibold px-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;