import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToCart } from "../../actions/cart";
import $ from "jquery";
import "./css/ProductCard.css";

const ProductCard = ({
  product: {
    _id,
    name,
    brand,
    price,
    images,
    description,
    modelyear,
    gender,
    category,
    color,
  },
  addProductToCart,
}) => {
  const handleHover = (id) => {
    $(`.hover${id}`).addClass("animate");
  };

  const handleLeave = (id) => {
    $(`.hover${id}`).removeClass("animate");
  };

  const handleCart = (e) => {
    e.preventDefault();
    $(".add-to-cart-gif img").attr(
      "src",
      "https://i.pinimg.com/originals/93/d5/79/93d5790a9ed64a9ec17494651ef5e796.gif"
    );
    $(".add-to-cart-gif img").addClass("visible");
    setTimeout(() => {
      $(".add-to-cart-gif img").removeClass("visible");
    }, 4000);

    addProductToCart({
      _id,
      name,
      brand: brand.brandname,
      price,
      color,
      image: images[0],
      quantity: 1,
    });
  };

  return (
    <Fragment>
      <div id="make-3D-space">
        <div
          id="product-card"
          className={"hover" + _id}
          onMouseOver={() => handleHover(_id)}
          onMouseLeave={() => handleLeave(_id)}
        >
          <div id="product-front">
            <div className="shadow"></div>
            <img
              className="test"
              src={images[0]}
              alt={description && description}
            />
            <div className="image_overlay"></div>
            <div id="view_details">
              <Link to={"/product/" + _id}>View details</Link>
            </div>
            <div className="stats">
              <div className="stats-container">
                <span className="product_price">&#8377; {price}</span>
                <span className="product_name">
                  {" "}
                  {name} {modelyear && modelyear}
                </span>
                <p>
                  <strong>{color && color}</strong>{" "}
                  <strong>{gender && gender}</strong>
                </p>

                <div className="product-options">
                  <ul>
                    {brand && <li>Brand: {brand.brandname}</li>}
                    {category && <li>Category: {category.name}</li>}
                    {/* stars */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-bottom">
          <div id="product-bottom-card">
            <Link to={"/product/" + _id} className="btn btn--primary">
              Buy Now
            </Link>
            <button
              onClick={handleCart}
              className="btn btn--primary float-right add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { addProductToCart })(ProductCard);
