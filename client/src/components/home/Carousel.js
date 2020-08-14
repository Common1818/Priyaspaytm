import React, { useState } from "react";
import $ from "jquery";
import { Carousel } from "react-bootstrap";
import "./css/Carousel.css";
import carousel1 from "./Images/carousel1.PNG";
import carousel2 from "./Images/carousel2.PNG";
import carousel3 from "./Images/carousel3.PNG";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
