import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard'; 

const ProductList = ({ items, onAddToCart }) => {
  return (
    <Container className="my-5" id="products">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase">DANH SÁCH SẢN PHẨM</h2>
        <div className="bg-warning mx-auto" style={{ width: '80px', height: '3px' }}></div>
      </div>

      <Row className="g-4">
        {items.map((item) => (
          <Col key={item.id} lg={3} md={6} sm={12}>
            
            <ProductCard product={item} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;