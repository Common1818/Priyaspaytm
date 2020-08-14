import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";
import ProductHeading from "./ProductHeading";
import ProductDescription from "./ProductDescription";
import Specifications from "./Specifications";
import { getAllCategories } from "../../../actions/category";
import { getAllBrands } from "../../../actions/brand";
// import { addBike } from "../../../actions/product";

const UpdateProduct = ({ getAllCategories, getAllBrands, product }) => {
  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);
  console.log(product);
  console.log(product.product);

  const { images } = product.product;

  console.log(images);

  const [productImage1, setproductImage1] = useState(images[0]);
  const [productImage2, setproductImage2] = useState(images[1]);
  const [productImage3, setproductImage3] = useState(images[2]);
  const [productImage4, setproductImage4] = useState(images[3]);
  const [Rating, setRating] = useState("5");
  const [Price, setPrice] = useState(product.product.price);
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
})(UpdateProduct);
