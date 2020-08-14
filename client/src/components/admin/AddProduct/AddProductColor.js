import React, { useState } from "react";
import { connect } from "react-redux";
import { addBikecolor } from "../../../actions/product";
import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";

const AddProductColor = ({ product, addBikecolor }) => {
  const prod = product.product;
  const categoryId = prod.category._id;
  const specificationId = prod.specifications._id;
  const brandId = prod.brand._id;
  const [productImage1, setproductImage1] = useState("");
  const [productImage2, setproductImage2] = useState("");
  const [productImage3, setproductImage3] = useState("");
  const [productImage4, setproductImage4] = useState("");
  const [stock, setstock] = useState("");
  const [color, setcolor] = useState("");
  const { name, price, description, modelyear, gender } = product.product;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      description,
      modelyear,
      gender,
      color: color,
      stock: parseInt(stock),
      images: [productImage1, productImage2, productImage3, productImage4],
      category: categoryId,
      brand: brandId,
      specifications: specificationId,
      Rating: "4",
    };

    addBikecolor(newProduct);
  };

  return (
    <div class="fluid-container p-4 m-2">
      <h2 className="text-center">Add Product Color</h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{ margin: "0px auto", width: "60vw", textAlign: "center" }}
          class="row product-container"
        >
          <div class=" product-image">
            <input
              onChange={(e) => {
                setstock(e.target.value);
              }}
              style={{ width: "50px", marginRight: "100px" }}
              type="number"
              placeholder="stock"
              name=""
              id=""
            />
            <input
              onChange={(e) => {
                setcolor(e.target.value);
              }}
              type="text"
              placeholder="color"
            />
            <ProductDesktop
              img1={setproductImage1}
              img4={setproductImage4}
              img3={setproductImage3}
              img2={setproductImage2}
            />
            <ProductMobile
              img1={setproductImage1}
              img4={setproductImage4}
              img3={setproductImage3}
              img2={setproductImage2}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { addBikecolor })(AddProductColor);
