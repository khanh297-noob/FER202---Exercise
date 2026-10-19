import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="card p-5 shadow-sm text-center border-0 rounded-4 bg-white">
        <h4 className="text-danger fw-bold mb-3">
          Product Not Found (ID: {id} does not exist)
        </h4>
        <div>
          <button
            className="btn btn-secondary fw-semibold px-4"
            onClick={() => navigate('/products')}
          >
            &larr; Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-4 shadow-sm border-0 rounded-4 bg-white">
      <h4 className="fw-bold text-primary mb-3">Product Details</h4>
      <hr className="mt-0" />

      <div className="mb-4">
        <p className="mb-2">
          <strong>ID:</strong> {product.id}
        </p>
        <p className="mb-2">
          <strong>Name:</strong> <span className="fw-bold">{product.name}</span>
        </p>
        <p className="mb-2">
          <strong>Danh mục:</strong>{' '}
          <span >{product.category}</span>
        </p>
        <p className="mb-2">
          <strong>Giá:</strong>{' '}
          <span className="text-danger fw-bold">
            {product.price.toLocaleString('vi-VN')} đ
          </span>
        </p>
        <p className="mb-0">
          <strong>Mô tả: </strong> {product.description}
        </p>
      </div>

      <div>
        <button
          className="btn btn-secondary fw-semibold px-4"
          onClick={() => navigate('/products')}
        >
          &larr; Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;