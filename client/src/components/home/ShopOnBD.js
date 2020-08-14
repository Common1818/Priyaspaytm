import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import ShopOnBDback from "./Images/ShopOnBDback.PNG";
import "./css/ShopOnBD.css";

const ShopOnBD = () => {
  return (
    <div class="shop-onBD-container">
      <h2>Shop On BicycleDrift</h2>
      <div class="shop-on-bd row desktop">
        <div class="col-sm-4">
          <h3>For Adults</h3>

          <img src={ShopOnBDback} alt=""></img>
          <img
            className="bike"
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Rock_Blue_2019_07.png"
            alt=""
          ></img>
        </div>
        <div class="col-sm-4">
          <h3>For Kids</h3>
          <img src={ShopOnBDback} alt=""></img>
          <img
            className="bike"
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_DTR_24_2019_07.png"
            alt=""
          ></img>
        </div>
        <div class="col-sm-4">
          <h3>Accessories</h3>
          <img src={ShopOnBDback} alt=""></img>
          <img
            class=" accessory-man"
            src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/home-page-directory/macro-level-carousel/accessories-img.png"
            alt=""
          ></img>
        </div>
      </div>
      {/* Mobile view */}
      <div class="shop-on-bd mobile">
        <Carousel interval={10000000}>
          <Carousel.Item>
            <div class="col-sm-4">
              <h3>For Adults</h3>

              <img src={ShopOnBDback} alt=""></img>
              <img
                className="bike"
                src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Rock_Blue_2019_07.png"
                alt=""
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-sm-4">
              <h3>For Kids</h3>
              <img src={ShopOnBDback} alt=""></img>
              <img
                className="bike"
                src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_DTR_24_2019_07.png"
                alt=""
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="col-sm-4">
              <h3>Accessories</h3>
              <img src={ShopOnBDback} alt=""></img>
              <img
                class=" accessory-man"
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/home-page-directory/macro-level-carousel/accessories-img.png"
                alt=""
              ></img>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ShopOnBD;
