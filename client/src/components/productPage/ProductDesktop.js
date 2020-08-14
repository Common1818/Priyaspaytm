import React from "react";
import "./css/ProductDesktop.css";
import $ from "jquery";
const ProductDesktop = ({ images }) => {
  const changeDisplayImage = (tempSource) => {
    $(".display-image").removeAttr("src");
    $(".display-image").attr("src", tempSource);
  };

  const imagesArray = images && images;
  return (
    <div class="row product-image-container desktop">
      <div class="col-sm-2">
        {imagesArray &&
          imagesArray.map((image) => {
            return (
              <div key={image} class="row">
                <img
                  onClick={(e) => {
                    changeDisplayImage(e.target.src);
                  }}
                  src={image}
                  alt=""
                ></img>
              </div>
            );
          })}
      </div>
      <div class="col-sm-10 ">
        <img
          className="display-image"
          src={imagesArray && imagesArray[0]}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ProductDesktop;
