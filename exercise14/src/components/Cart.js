import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, totalCount, totalAmount, removeFromCart, clearCart } = useCart();

  return (
    <div className="card bg-dark text-white border-warning border-1 shadow-sm p-3 h-100">
      <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-3">
        <h5 className="fw-bold mb-0 text-warning">
          <i className="bi bi-basket me-2"></i>Giỏ Hàng
        </h5>
        <span className="badge bg-warning text-dark fs-6">{totalCount} món</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted my-auto py-5">
          <i className="bi bi-cart-x fs-1 d-block mb-2"></i>
          Giỏ hàng của bạn đang trống!
        </div>
      ) : (
        <div className="d-flex flex-column h-100">
          <div className="overflow-auto pe-1 mb-3" style={{ maxHeight: '280px' }}>
            <ul className="list-group list-group-flush bg-transparent">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item bg-transparent text-white px-0 py-2 d-flex justify-content-between align-items-center border-secondary"
                >
                  <div>
                    <h6 className="mb-0 fw-semibold">{item.name}</h6>
                    <small className="text-muted">
                      ${item.price} x {item.quantity} = ${(Number(item.price) * item.quantity).toFixed(2)}
                    </small>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm py-0 px-2"
                    onClick={() => removeFromCart(item.id)}
                    title="Xóa món này"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto border-top border-secondary pt-3">
            <div className="d-flex justify-content-between fs-5 fw-bold mb-3 text-warning">
              <span>Tổng Cộng:</span>
              <span>${totalAmount}</span>
            </div>
            <button className="btn btn-danger w-100 fw-bold" onClick={clearCart}>
              <i className="bi bi-x-circle me-1"></i> Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;