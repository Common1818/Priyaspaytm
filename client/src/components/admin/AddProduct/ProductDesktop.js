import React from "react";
import $ from "jquery";
import addImage from "./images/addImage.PNG";
import "./css/ProdutDesktop.css";

const ProductDesktop = ({ img1, img2, img3, img4 }) => {
  const handlePreview = (value, imgclass) => {
    value != ""
      ? $(`.${imgclass}`).attr("src", value)
      : $(`.${imgclass}`).attr("src", addImage);
  };

  return (
    <div class="row product-image-container desktop">
      <div class="col-sm-2">
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img1(e.target.value);
              handlePreview(e.target.value, "prod-img-1");
            }}
          />
          <img className="prod-img-1" src={addImage} alt=""></img>
        </div>
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img2(e.target.value);
              handlePreview(e.target.value, "prod-img-2");
            }}
          />
          <img className="prod-img-2" src={addImage} alt=""></img>
        </div>
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img3(e.target.value);
              handlePreview(e.target.value, "prod-img-3");
            }}
          />
          <img className="prod-img-3" src={addImage} alt=""></img>
        </div>
        <div class="row">
          <input
            type="text"
            onChange={(e) => {
              img4(e.target.value);
              handlePreview(e.target.value, "prod-img-4");
            }}
          />
          <img className="prod-img-4" src={addImage} alt=""></img>
        </div>
      </div>
      <div class="col-sm-10 ">
        <img className="display-image prod-img-1" src={addImage} alt=""></img>
      </div>
    </div>
  );
};

export default ProductDesktop;
