import React, { useState } from "react";
import { addBrand } from "../../actions/brand";
import { connect } from "react-redux";

const AddBrand = ({ brand, addBrand }) => {
  const [brandname, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addBrand({ brandname, description });
  };

  const AddedBrand = brand.brand && brand.brand.brandname;
  // const errorMessage = category.category && category.category.errMessage;
  console.log(brand && brand.errMessage);

  return (
    <div className="add-category container-fluid">
      <form>
        <input
          onChange={(e) => setBrand(e.target.value)}
          type="text"
          placeholder="Enter Brand Name"
        />
        <br />
        <br />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Brand Description"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button onClick={handleSubmit} type="submit">
          {" "}
          AddBrand
          <span class="plus"> +</span>{" "}
        </button>
      </form>
      <div className="status">
        {AddedBrand ? (
          <span>
            Brand <b>{AddedBrand}</b> Was added Successfully
          </span>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brand: state.brand,
});

export default connect(mapStateToProps, { addBrand })(AddBrand);
