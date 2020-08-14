import React, { useState } from "react";
import { addCategory } from "../../actions/category";
import { connect } from "react-redux";

// import { setAuthToken } from "../../utils/setAuthToken";

const AddCategory = ({ category, addCategory }) => {
  const [name, setcategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCategory({ name });
  };

  const AddedCategory = category.category && category.category.name;
  // const errorMessage = category.category && category.category.errMessage;

  return (
    <div className="add-category container-fluid">
      <form>
        <input
          onChange={(e) => setcategory(e.target.value)}
          type="text"
          placeholder="Enter category Name"
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          {" "}
          AddCategory
          <span class="plus"> +</span>{" "}
        </button>
      </form>
      <div className="status">
        {AddedCategory ? (
          <span>
            Category <b>{AddedCategory}</b> Was added Successfully
          </span>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { addCategory })(AddCategory);
