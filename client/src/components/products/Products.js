import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllBikes } from "../../actions/products";
import { emptyProductState } from "../../actions/product";
import Loader from "../layout/Loader";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./css/Products.css";

const Products = ({
  getAllBikes,
  emptyProductState,
  bikes,
  accessories,
  searchResults,
  loading,
  match,
}) => {
  useEffect(() => {
    getAllBikes();
    emptyProductState();
  }, []);

  const type = match.params.type;

  const products =
    type === "search"
      ? searchResults.length === 0
        ? bikes
        : searchResults
      : type === "bikes"
      ? bikes
      : accessories;

  console.log("products: ", products);

  const heading =
    type === "search"
      ? "Search Results..."
      : type === "bikes"
      ? "Bicycles....."
      : "Accessories...";

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return loading ? (
    <Loader />
  ) : (
    <div className="products-container">
      <div className="add-to-cart-gif">
        <img src="" alt="" srcset="" />
      </div>
      <h1>{heading}</h1>
      <Row>
        {currentProducts &&
          currentProducts.map((item) => (
            <Col sm={3} key={item._id}>
              <ProductCard product={item} />
            </Col>
          ))}
      </Row>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bikes: state.products.Bikes,
  accessories: state.products.Accessories,
  searchResults: state.products.SearchResults,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { getAllBikes, emptyProductState })(
  Products
);
