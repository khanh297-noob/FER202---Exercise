import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

const Header = ({ cartCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-warning">
          SHOP FASHION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#products" className="text-white">Products</Nav.Link>
            <Nav.Link href="#men" className="text-white">Men</Nav.Link>
            <Nav.Link href="#women" className="text-white">Women</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            <Nav.Link href="#cart" className="btn btn-outline-warning text-warning px-3 py-1 ms-lg-3">
              <i className="bi bi-cart3 me-2"></i>Cart
              <Badge bg="warning" text="dark" className="ms-2">
                {cartCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;