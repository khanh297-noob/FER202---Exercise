import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import ThemeComponent from './components/ThemeComponent';
import DishesList from './components/DishesList';
import Cart from './components/Cart';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="bg-dark text-white min-vh-100 py-5">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="fw-black text-warning text-uppercase">
                Exercise 14: React Hook (useContext)
              </h1>

            </div>

            {/* Bài 1: Theme Switcher */}
            <div className="mb-5">
              <ThemeComponent />
            </div>

            {/* Bài 2: Dishes List & Cart */}
            <div className="card bg-secondary bg-opacity-10 border-secondary p-4 rounded-4 shadow">
              <h4 className="text-info fw-bold mb-4 border-bottom border-secondary pb-2">
                Exercise 2: Simple Cart Application
              </h4>
              <div className="row g-4">
                <div className="col-lg-7 col-12">
                  <DishesList />
                </div>
                <div className="col-lg-5 col-12">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;