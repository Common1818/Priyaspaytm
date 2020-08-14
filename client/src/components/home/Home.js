import React from "react";
import OurPromise from "./OurPromise";
import HomeCarousel from "./Carousel";
import ShopOnBD from "./ShopOnBD";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  return (
    <React.Fragment>
      <HomeCarousel />
      <OurPromise />
      <ShopOnBD />
      <CustomerReviews />
    </React.Fragment>
  );
};

export default Home;
