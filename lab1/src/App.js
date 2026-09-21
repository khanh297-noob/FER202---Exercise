import React, { useState } from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import ProductList from './component/ProductList';
import Footer from './component/Footer';
import { products } from './data/products';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      
      <Header cartCount={cartCount} />

      
      <Banner />

      
      <ProductList items={products} onAddToCart={handleAddToCart} />

 
      <Footer />
    </div>
  );
}

export default App;