import React from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
// import "./css/ProductDescription.css";

const ProductDescription = ({
  product,
  setPrice,
  setDescription,
  setproductName,
  setmodelYear,
}) => {
  return (
    <div class="product-description col-lg-5">
      <main class="card main-grid">
        <div class="card__content">
          <div class="card__head">
            <h2>
              <input
                style={{ width: "100%" }}
                onChange={(e) => setproductName(e.target.value)}
                defaultValue={product.name}
                placeholder="Product Heading"
                type="text"
              />
              <br /> {"("}{" "}
              <input
                onChange={(e) => setmodelYear(e.target.value)}
                placeholder="ModelYear"
                defaultValue={product.modelyear}
                style={{ width: "50%" }}
                type="number"
              />{" "}
              {")"}
            </h2>
            <div class="card__text">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product Description"
                defaultValue={product.description}
                cols="30"
                rows="2"
              ></textarea>
              <ul class="description-promise">
                <li>Fre Home Delivery</li>
                <li>Fully Fitted ready to ride</li>
                <li>Free accessories worth 500</li>
              </ul>
            </div>
            <p class="card__price">
              &#8377;{" "}
              <input
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={product.price}
                style={{ width: "50%" }}
                placeholder="Price"
                type="number"
              />
            </p>
          </div>
          <div className="pincode__check">
            <input
              type="number"
              placeholder="Check Availability"
              name="pincode"
            />
            <button
              onClick={() => {
                $(".checking").css("display", "block");
              }}
              type="submit"
            >
              Check
              <Spinner className="checking" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </button>
          </div>

          <button href="#" class="btn btn--primary">
            add to cart
          </button>
          <div style={{ fontSize: "2rem", fontWeight: "800" }} className="or">
            OR
          </div>
          <button href="#" class="btn btn--primary">
            Pickup From Store{" "}
            <img src="https://www.svgrepo.com/show/10112/map.svg" alt="" />
          </button>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
});

export default connect(mapStateToProps)(ProductDescription);
