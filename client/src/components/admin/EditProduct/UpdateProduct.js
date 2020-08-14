import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";
import ProductHeading from "./ProductHeading";
import ProductDescription from "./ProductDescription";
import Specifications from "./Specifications";
import { getAllCategories } from "../../../actions/category";
import { getAllBrands } from "../../../actions/brand";
import { updateBike } from "../../../actions/product";
import axios from "axios";
// import { addBike } from "../../../actions/product";

const UpdateProduct = ({
  getAllCategories,
  getAllBrands,
  product,
  updateBike,
}) => {
  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);
  console.log(product);
  console.log(product.product);

  const { images } = product.product;

  const [productImage1, setproductImage1] = useState(images[0]);
  const [productImage2, setproductImage2] = useState(images[1]);
  const [productImage3, setproductImage3] = useState(images[2]);
  const [productImage4, setproductImage4] = useState(images[3]);
  const [Rating, setRating] = useState("5");
  const [Price, setPrice] = useState(product.product.price);
  const [name, setproductName] = useState(product.product.name);
  const [Description, setDescription] = useState(product.product.description);
  const [modelYear, setmodelYear] = useState(product.product.modelyear);
  const [color, setcolor] = useState(product.product.color);
  const [size, setsize] = useState("");
  const [handlebar, sethandlebar] = useState(
    product.product.specifications.handlebar
  );
  const [brakes, setbrakes] = useState(product.product.specifications.brakes);
  const [tyres, settyres] = useState(product.product.specifications.tire);
  const [rims, setrims] = useState(product.product.specifications.rim);
  const [frontDerailleur, setfrontDerailleur] = useState(
    product.product.specifications.frontderailleur
  );
  const [rearDerailleur, setrearDerailleur] = useState(
    product.product.specifications.rearderailleur
  );
  const [chain, setchain] = useState(product.product.specifications.chain);
  const [shifter, setshifter] = useState(
    product.product.specifications.shifter
  );
  const [fork, setfork] = useState(product.product.specifications.suspension);
  const [frame, setframe] = useState(
    product.product.specifications.framematerial
  );
  const [category, setcategory] = useState(product.product.category._id);
  const [brand, setbrand] = useState(product.product.brand._id);
  const [gender, setgender] = useState(product.product.gender);
  const [stock, setstock] = useState(product.product.stock);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      images: [productImage1, productImage2, productImage3, productImage4],
      name,
      Rating,
      price: parseInt(Price),
      description: Description,
      modelyear: parseInt(modelYear),
      category,
      stock: parseInt(stock),
      brand,
      gender,
      specifications: {
        frontderailleur: frontDerailleur,
        rearderailleur: rearDerailleur,
        shifter,
        handlebar,
        tire: tyres,
        rim: rims,
        suspension: fork,
        chain,
        framematerial: frame,
        brakes,
        color,
        size,
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const bikedata = {
      images: [productImage1, productImage2, productImage3, productImage4],
      name,
      Rating,
      price: parseInt(Price),
      description: Description,
      modelyear: parseInt(modelYear),
      category,
      stock: parseInt(stock),
      brand,
      gender,
      specifications: {
        frontderailleur: frontDerailleur,
        rearderailleur: rearDerailleur,
        shifter,
        handlebar,
        tire: tyres,
        rim: rims,
        suspension: fork,
        chain,
        framematerial: frame,
        brakes,
        color,
        size,
      },
    };

    updateBike(bikedata, product.product._id);

    // axios.put(
    //   `/api/product/${product.product._id}/${localStorage.getItem("userId")}`,
    //   body,
    //   config
    // );
  };

  return (
    <div class="fluid-container p-4 m-2">
      <h2 className="text-center">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div class="row product-container">
          <div class=" product-image col-lg-7">
            <ProductHeading
              setcategory={setcategory}
              setbrand={setbrand}
              setgender={setgender}
              setRating={setRating}
              setstock={setstock}
              Rating={Rating}
            />
            <ProductDesktop
              productImage1={productImage1}
              productImage2={productImage2}
              productImage3={productImage3}
              productImage4={productImage4}
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
          <ProductDescription
            setPrice={setPrice}
            setDescription={setDescription}
            setproductName={setproductName}
            setmodelYear={setmodelYear}
          />
        </div>

        <hr class="hr-4"></hr>
        <Specifications
          setcolor={setcolor}
          setsize={setsize}
          sethandlebar={sethandlebar}
          setbrakes={setbrakes}
          settyres={settyres}
          setrims={setrims}
          setfrontDerailleur={setfrontDerailleur}
          setrearDerailleur={setrearDerailleur}
          setchain={setchain}
          setshifter={setshifter}
          setfork={setfork}
          setframe={setframe}
          color={product.product.color}
        />
        {/* <CustomerReviews /> */}
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, {
  getAllCategories,
  getAllBrands,
  updateBike,
})(UpdateProduct);
