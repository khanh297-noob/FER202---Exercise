import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="card p-5 shadow-sm text-center border-0 rounded-4 bg-white">
      <h2 className="fw-bold text-primary mb-3">Welcome to Product Management</h2>
      <p className="text-muted mb-4">
        Explore and manage our product list with search, category filter, and pagination.
      </p>
      <div>
        <Link to="/products" className="btn btn-primary px-4 fw-semibold">
          Go to Product List &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Home;