import React from 'react';
import { useCart } from '../contexts/CartContext';

const DishesList = () => {
  const { dishes, addToCart } = useCart();

  return (
    <div className="h-100">
      <h5 className="text-warning fw-bold mb-3">Thực Đơn Món Ăn</h5>
      <div className="row g-3">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-12 col-sm-6">
            <div className="card h-100 bg-secondary bg-opacity-25 text-white border-0 shadow-sm overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="card-img-top" 
                style={{ height: '140px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column p-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="fw-bold mb-0">{dish.name}</h6>
                  {dish.label && <span className="badge bg-danger small">{dish.label}</span>}
                </div>
                <p className="text-warning fw-bold mb-2">${dish.price}</p>
                <p className="small text-light text-truncate mb-3" title={dish.description}>
                  {dish.description}
                </p>
                <button
                  className="btn btn-warning btn-sm mt-auto fw-semibold text-dark"
                  onClick={() => addToCart(dish)}
                >
                  <i className="bi bi-cart-plus me-1"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesList;