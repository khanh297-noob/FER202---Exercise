import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../data/Images/banner1.jpg';
import banner2 from '../data/Images/banner2.jpg';
import banner3 from '../data/Images/banner3.jpg';

const Banner = () => {
  return (
    <Carousel fade className="shadow">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Fashion Collection 2026"
          style={{ height: '480px', objectFit: 'cover', filter: 'brightness(70%)' }}
        />
        <Carousel.Caption className="text-start pb-5">
          <h1 className="display-4 fw-bold text-warning">FASHION COLLECTION 2026</h1>
          <p className="fs-5">Discover the latest fashion trend for 2026.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Summer Sales"
          style={{ height: '480px', objectFit: 'cover', filter: 'brightness(70%)' }}
        />
        <Carousel.Caption className="text-start pb-5">
          <h1 className="display-4 fw-bold text-warning">SUMMER SALES UPTO 50%</h1>
          <p className="fs-5">Enjoy special discount on selected product.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={banner3}
          alt="New Arrivals"
          style={{ height: '480px', objectFit: 'cover', filter: 'brightness(70%)' }}
        />
        <Carousel.Caption className="text-start pb-5">
          <h1 className="display-4 fw-bold text-warning">NEW ARRIVALS</h1>
          <p className="fs-5">Explore our newest clothing collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;