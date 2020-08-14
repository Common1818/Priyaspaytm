import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
import { searchResult, getAllBikes } from "../../../../actions/products";

const SearchBar = ({ searchResult, history, getAllBikes, Bikes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const closeSearchNav = () => {
    $(".searchBar").addClass("hiddenTransform");
    setTimeout(() => {
      $(".searchBar").addClass("hidden-xs");
    }, 300);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Bikes.length === 0) {
      await getAllBikes();
    }
    searchResult(searchTerm, history);
  };

  return (
    <div className="searchBar hidden-xs hiddenTransform" id="searchBar">
      <button
        className="defaultButton secondaryBlack visible-xs closerButton"
        onClick={closeSearchNav}
        id="closeSearchBar"
      >
        <img
          src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/buttons/x-mark-black.svg"
          className="img-responsive center-block"
          alt="Close"
          title="Close"
        />
      </button>
      <form
        className="form searchForm"
        id="appNavSearchForm"
        onSubmit={handleSubmit}
      >
        <div className="form-group positionRelative">
          <input
            style={{ borderRadius: "20px" }}
            type="text"
            className="defaultInput"
            id="appSearch"
            name="appSearch"
            placeholder="Search on CycleDrift"
            onChange={handleChange}
          />
          <div
            onClick={(e) => {
              handleSubmit(e);
              closeSearchNav();
            }}
            className="SearchButton"
          >
            <img
              style={{ width: "28px" }}
              src="https://www.svgrepo.com/show/3907/search.svg"
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Bikes: state.products.Bikes,
});

export default connect(mapStateToProps, { searchResult, getAllBikes })(
  withRouter(SearchBar)
);
