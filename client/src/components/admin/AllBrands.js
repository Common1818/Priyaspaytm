import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBrands } from "../../actions/brand";
import { deleteBrand } from "../../actions/brand";

import "./css/AllCategories.css";
import Loader from "../layout/Loader";

const AllBrands = ({
  getAllBrands,
  brand,
  deleteBrand,
  deletedBrand,
  loadingComplete,
  errMessage,
}) => {
  const fetchedBrands = brand.brands;
  useEffect(() => {
    getAllBrands();
  }, []);

  const deleteMessage = brand && brand.deleteBrand;

  return (
    <div className="all-categories container-fluid">
      <h3>All Brands</h3>
      {loadingComplete == true ? (
        <table>
          <tbody>
            <tr>
              <th>Brand</th>
            </tr>
            {fetchedBrands &&
              fetchedBrands.map((brand) => {
                return (
                  <tr key={brand._id}>
                    <td>{brand.brandname}</td>
                    <button
                      onClick={() => {
                        deleteBrand(brand._id);
                      }}
                    >
                      Delete
                    </button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
      <div className="status">
        <span>
          {(errMessage && errMessage) || (deletedBrand && deletedBrand.message)}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brand: state.brand,
  loadingComplete: state.brand.loadingComplete,
  errMessage: state.brand.errMessage,
  deletedBrand: state.brand.deletedBrand,
});

export default connect(mapStateToProps, { getAllBrands, deleteBrand })(
  AllBrands
);
