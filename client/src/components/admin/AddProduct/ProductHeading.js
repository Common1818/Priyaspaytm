import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import "./css/ProductHeading.css";

const ProductHeading = ({
  setRating,
  setcategory,
  setbrand,
  setgender,
  setstock,
  Rating,
  category,
  brand,
}) => {
  const [show, setShow] = useState(false);
  const categoryOptions = category.categories;
  const brandOptions = brand.brands;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="product-header">
      <div class="rating-box">
        <img
          onClick={handleShow}
          src="https://www.svgrepo.com/show/22427/star.svg"
          alt=""
        ></img>
        <span>{Rating}</span>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rating Value</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className=""
              onChange={(e) => {
                setRating(e.target.value);
              }}
              placeholder="Product Rating"
              type="text"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="select-category">
        <span>Select Category</span>

        <select
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        >
          <option value="null">null</option>
          {categoryOptions &&
            categoryOptions.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
        </select>
      </div>
      <div className="select-category">
        <span>Select Brand</span>
        <select
          onChange={(e) => {
            setbrand(e.target.value);
          }}
        >
          <option value="null">null</option>
          {brandOptions &&
            brandOptions.map((brand) => {
              return <option value={brand._id}>{brand.brandname}</option>;
            })}
        </select>
      </div>
      <div className="select-category">
        <span>Select Gender</span>
        <select
          onChange={(e) => {
            setgender(e.target.value);
          }}
        >
          <option value="null">null</option>
          <option value="Unisex">Unisex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="select-category">
        <span>Stock</span>
        <input
          style={{ width: "30px" }}
          onChange={(e) => {
            setstock(e.target.value);
          }}
          type="number"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brand: state.brand,
  category: state.category,
});

export default connect(mapStateToProps)(ProductHeading);
