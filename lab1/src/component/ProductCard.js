import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  const getBadgeVariant = (status) => {
    if (status === 'Sale') return 'danger';
    if (status === 'Hot') return 'warning';
    return 'success';
  };

  return (
    <Card className="h-100 shadow-sm border-0 position-relative rounded-3 overflow-hidden">
      {/* Badge Status */}
      <Badge 
        bg={getBadgeVariant(product.status)} 
        className="position-absolute top-0 start-0 m-2 px-2 py-1 fs-6"
      >
        {product.status}
      </Badge>

      {}
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.name} 
        style={{ height: '240px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column text-center p-3">
        <Card.Title className="fs-6 fw-bold mb-2">{product.name}</Card.Title>
        <Card.Text className="text-danger fw-bold fs-5 mb-3">
          {product.price.toLocaleString('vi-VN')} đ
        </Card.Text>
        <Button 
          variant="dark" 
          className="w-100 mt-auto fw-semibold"
          onClick={() => onAddToCart(product)}
        >
          <i className="bi bi-cart-plus me-2"></i>Thêm vào giỏ
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;