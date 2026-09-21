import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 border-top border-secondary">
      <Container className="text-center">
        <h5 className="fw-bold text-warning mb-2">SHOP FASHION</h5>
        <p className="text-secondary small mb-2">Mang đến phong cách thời trang dẫn đầu xu hướng 2026.</p>
        <div className="text-secondary small">
          &copy; 2026 Shop Fashion. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;