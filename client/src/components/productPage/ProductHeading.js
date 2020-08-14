import React from "react";

import "./css/ProductHeading.css";

const ProductHeading = ({ name, modelyear }) => {
  return (
    <div className="product-header">
      <h3 className="product-name-heading">
        {name && name} ({modelyear && modelyear})
      </h3>
      <div className="rating-box">
        <img src="https://www.svgrepo.com/show/22427/star.svg" alt=""></img> 4.8
      </div>
    </div>
  );
};

export default ProductHeading;
