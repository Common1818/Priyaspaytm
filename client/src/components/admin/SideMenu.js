import React from "react";
import AddCategory from "./AddCategory";
import AllCategories from "./AllCategories";
import { Link } from "react-router-dom";
import AddBrand from "./AddBrand";
import AllBrands from "./AllBrands";
import AllBikes from "./AllBikes";
import AllPincodes from "./AllPincodes";
import AddPincode from "./AddPincode";
import AllOrders from "./AllOrders";

const SideMenu = ({ displayComp }) => {
  const handleDisplay = (comp) => {
    displayComp(comp);
  };

  return (
    <div id="sideMenu">
      <h1>Bicycle Drift Admin Dashboard</h1>

      <ul class="menu">
        <li>Orders</li>
        <li
          onClick={() => {
            console.log("click");
            handleDisplay(<AllOrders />);
          }}
        >
          View All Orders
        </li>
        {/* <li>View all Accesssories</li> */}
      </ul>

      <ul class="menu">
        <li>Categories</li>
        <li
          onClick={() => {
            console.log("click");
            handleDisplay(<AddCategory />);
          }}
        >
          {" "}
          <span class="plus">+</span> Add Category
        </li>
        <li
          onClick={() => {
            console.log("click");
            handleDisplay(<AllCategories />);
          }}
        >
          View All Categories
        </li>
      </ul>

      <ul class="menu">
        <li>Brands</li>
        <li
          onClick={() => {
            console.log("click");
            handleDisplay(<AddBrand />);
          }}
        >
          {" "}
          <span class="plus">+</span> Add Brand
        </li>
        <li
          onClick={() => {
            console.log("click");
            handleDisplay(<AllBrands />);
          }}
        >
          View All Brands
        </li>
      </ul>

      <ul class="menu">
        <li>Bicycles</li>
        <li>
          <Link to="/admin/product/add">
            {" "}
            <span class="plus">+</span> Add Bike
          </Link>
        </li>

        <li
          onClick={() => {
            console.log("click");
            handleDisplay(<AllBikes />);
          }}
        >
          View all Bikes
        </li>
      </ul>

      <ul class="menu">
        <li>Pincode</li>
        <li
          onClick={() => {
            handleDisplay(<AddPincode />);
          }}
        >
          {" "}
          <span class="plus">+</span> Add Pincode
        </li>
        <li
          onClick={() => {
            handleDisplay(<AllPincodes />);
          }}
        >
          View all Pincodes
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
