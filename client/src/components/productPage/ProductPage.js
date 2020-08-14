import React, { useEffect } from "react";
import "./css/ProductPage.css";
import CustomerReviews from "./CustomerReviews";
import Specifications from "./Specifications";
import ProductHeading from "./ProductHeading";
import ProductDesktop from "./ProductDesktop";
import ProductDescription from "./ProductDescription";
import ProductMobile from "./ProductMobile";
import { connect } from "react-redux";
import { fetchBike } from "../../actions/product";
import ProductAdminSection from "./ProductAdminSection";
import Loader from "../layout/Loader";

const ProductPage = (props) => {
  useEffect(() => {
    fetchBike(productId);
  }, []);
  const { loading } = props;
  const { fetchBike } = props;
  const { productId } = props.match.params;
  const { product } = props.product;
  const specifications = product && product.specifications;
  const images = product && product.images;
  const name = product && product.name;
  const modelyear = product && product.modelyear;
  const gender = product && product.gender;
  const category = product && product.category;
  const description = product && product.description;
  const price = product && product.price;
  const stock = product && product.stock;

  var isLoading;

  isLoading = loading;

  return (
    <div class="fluid-container p-4 m-2">
      {isLoading == null ? (
        <Loader />
      ) : (
        <>
          <div class="row product-container">
            <div class=" product-image col-lg-7">
              <ProductHeading name={name} modelyear={modelyear} />

              <ProductDesktop images={images} />
              <ProductMobile images={images} />
            </div>
            <ProductDescription
              description={description}
              category={category}
              name={name}
              modelyear={modelyear}
              gender={gender}
              price={price}
              stock={stock}
            />
          </div>

          <hr class="hr-4"></hr>
          <Specifications specifications={specifications} />
          <CustomerReviews />
          <ProductAdminSection productId={productId} product={product} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { fetchBike })(ProductPage);
