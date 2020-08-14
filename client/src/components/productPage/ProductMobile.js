import React from "react";
import $ from "jquery";
import "./css/ProductMobile.css";

const ProductMobile = ({ images }) => {
  const changeDisplayImage = (tempSource) => {
    $(".cover-image img").removeAttr("src");
    $(".cover-image img").attr("src", tempSource);
  };
  const imagesArray = images && images;
  console.log(imagesArray);
  return (
    <div className="product-image-container mobile">
      <div className="cover-image">
        <img src={imagesArray && imagesArray[0]} alt="" />
      </div>
      <div className="not-cover-image">
        {imagesArray &&
          imagesArray.map((image) => {
            return (
              <div>
                <img
                  onClick={(e) => {
                    changeDisplayImage(e.target.src);
                  }}
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductMobile;
