import React from "react";
import { Carousel } from "react-bootstrap";
import emptyImage from '../../../public/images/emptyImage.jpeg'

const Home = () => {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img src={emptyImage} className="d-block w-100" alt="first slide" />
          <Carousel.Caption>
              <h3>Test Image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={emptyImage} className="d-block w-100" alt="first slide" />
          <Carousel.Caption>
              <h3>Test Image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={emptyImage} className="d-block w-100" alt="first slide" />
          <Carousel.Caption>
              <h3>Test Image</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
