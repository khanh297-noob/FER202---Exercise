import React, { useState } from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import ProductList from './component/ProductList';
import Footer from './component/Footer';
import { products } from './data/products';

function App() {
  
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* 1. Header Navigation */}
      <Header cartCount={cartCount} />

      {/* 2. Carousel Banner */}
      <Banner />

      {/* 3. Product List (8 items) */}
      <ProductList items={products} onAddToCart={handleAddToCart} />

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;