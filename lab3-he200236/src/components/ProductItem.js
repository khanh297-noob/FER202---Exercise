import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm border rounded-3">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-primary mb-2">{product.name}</h5>

        <div className="mb-2">
          <span className="badge bg-secondary">{product.category}</span>
        </div>

        <p className="card-text text-danger fw-bold fs-5 mb-3">
          {product.price.toLocaleString('vi-VN')} đ
        </p>

        <div className="mt-auto">
          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-info btn-sm fw-semibold w-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;