import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";
import ProductHeading from "./ProductHeading";
import ProductDescription from "./ProductDescription";
import Specifications from "./Specifications";
import { getAllCategories } from "../../../actions/category";
import { getAllBrands } from "../../../actions/brand";
import { addBike } from "../../../actions/product";

const ProuctForm = ({ getAllCategories, getAllBrands, addBike }) => {
  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);

  const [productImage1, setproductImage1] = useState("");
  const [productImage2, setproductImage2] = useState("");
  const [productImage3, setproductImage3] = useState("");
  const [productImage4, setproductImage4] = useState("");
  const [Rating, setRating] = useState("");
  const [Price, setPrice] = useState("");
  const [name, setproductName] = useState("");
  const [Description, setDescription] = useState("");
  const [modelYear, setmodelYear] = useState("");
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [handlebar, sethandlebar] = useState("");
  const [brakes, setbrakes] = useState("");
  const [tyres, settyres] = useState("");
  const [rims, setrims] = useState("");
  const [frontDerailleur, setfrontDerailleur] = useState("");
  const [rearDerailleur, setrearDerailleur] = useState("");
  const [chain, setchain] = useState("");
  const [shifter, setshifter] = useState("");
  const [fork, setfork] = useState("");
  const [frame, setframe] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [gender, setgender] = useState("");
  const [stock, setstock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({
    //   images: [productImage1, productImage2, productImage3, productImage4],
    //   name,
    //   Rating,
    //   price: parseInt(Price),
    //   description: Description,
    //   modelyear: parseInt(modelYear),
    //   category,
    //   stock: parseInt(stock),
    //   brand,
    //   gender,
    //   specifications: {
    //     frontderailleur: frontDerailleur,
    //     rearderailleur: rearDerailleur,
    //     shifter,
    //     handlebar,
    //     tire: tyres,
    //     rim: rims,
    //     suspension: fork,
    //     chain,
    //     framematerial: frame,
    //     brakes,
    //     color,
    //     size,
    //   },
    // });
    addBike({
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
  };

  return (
    <div class="fluid-container p-4 m-2">
      <h2 className="text-center">Add Product</h2>
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
        />
        {/* <CustomerReviews /> */}
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default connect(null, { getAllCategories, getAllBrands, addBike })(
  ProuctForm
);
