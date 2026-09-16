import React from 'react';
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button, 
  Carousel, 
  Container, 
  Row, 
  Col, 
  Card 
} from 'react-bootstrap';

function App() {
  const products = [
    { id: 1, name: 'Product', oldPrice: '100.000 vnd', newPrice: '80.000 vnd', isSale: false },
    { id: 2, name: 'Product', oldPrice: '100.000 vnd', newPrice: '80.000 vnd', isSale: false },
    { id: 3, name: 'Product', oldPrice: '100.000 vnd', newPrice: '80.000 vnd', isSale: false },
    { id: 4, name: 'Product', oldPrice: '100.000 vnd', newPrice: '80.000 vnd', isSale: true }
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Navbar sử dụng React-Bootstrap Components */}
      <Navbar bg="light" expand="lg" className="border-bottom px-4">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-secondary">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 form-control-sm"
                aria-label="Search"
                style={{ width: '180px' }}
              />
              <Button variant="outline-primary" size="sm">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. Banner Carousel (1920 x 530) */}
      <Carousel>
        <Carousel.Item>
          <div 
            style={{
              backgroundColor: '#cccccc',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#777777',
              fontSize: '64px',
              fontWeight: '300',
              letterSpacing: '2px'
            }}
          >
            1920 x 530
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div 
            style={{
              backgroundColor: '#bfbfbf',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666666',
              fontSize: '64px',
              fontWeight: '300',
              letterSpacing: '2px'
            }}
          >
            1920 x 530
          </div>
        </Carousel.Item>
      </Carousel>

      {/* 3. Lưới sản phẩm (NEW PRODUCT) sử dụng Container, Row, Col, Card */}
      <Container className="my-5">
        <h4 className="fw-bold mb-1">NEW PRODUCT</h4>
        <p className="text-muted small mb-4">List product description</p>

        <Row className="g-4">
          {products.map((item) => (
            <Col key={item.id} lg={3} md={6} sm={12}>
              <Card className="h-100 rounded-0 position-relative overflow-hidden">
                {/* Khung ảnh xám 280 x 280 */}
                <div 
                  style={{
                    backgroundColor: '#cccccc',
                    height: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666666',
                    fontSize: '20px',
                    position: 'relative'
                  }}
                >
                  280 x 280
                  {/* Nhãn Sale tam giác cam ở góc phải */}
                  {item.isSale && (
                    <>
                      <div 
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                          borderStyle: 'solid',
                          borderWidth: '0 65px 65px 0',
                          borderColor: 'transparent #ff9900 transparent transparent'
                        }}
                      />
                      <span 
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '4px',
                          color: 'white',
                          fontSize: '13px',
                          fontWeight: 'bold',
                          transform: 'rotate(45deg)'
                        }}
                      >
                        Sale
                      </span>
                    </>
                  )}
                </div>

                <Card.Body className="p-3">
                  <Card.Title className="text-muted fs-6 mb-2">{item.name}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <del className="text-muted small">{item.oldPrice}</del>
                    <span className="fw-bold" style={{ color: '#ff9900' }}>{item.newPrice}</span>
                  </div>
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    className="w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="bi bi-cart-fill text-primary"></i>
                    <span className="small">Xem chi tiết</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;