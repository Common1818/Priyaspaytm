import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategories } from "../../actions/category";
import { deleteCategory } from "../../actions/category";

import "./css/AllCategories.css";
import Loader from "../layout/Loader";

const AllCategories = ({
  getAllCategories,
  category,
  deleteCategory,
  loadingComplete,
}) => {
  const fetchedCategories = category.categories;
  useEffect(() => {
    getAllCategories();
  }, []);

  const deleteMessage = category && category.deletedCategory;

  const categoriesArrray = category.categories;
  return (
    <div className="all-categories container-fluid">
      <h3>All Categories</h3>
      {loadingComplete == true ? (
        <table>
          <tbody>
            <tr>
              <th>Category</th>
            </tr>

            {fetchedCategories &&
              fetchedCategories.map((category) => {
                return (
                  <tr key={category._id}>
                    <td>{category.name}</td>
                    <button
                      onClick={() => {
                        deleteCategory(category._id);
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
        <span>{deleteMessage && deleteMessage.message}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
  loadingComplete: state.category.loadingComplete,
});

export default connect(mapStateToProps, { getAllCategories, deleteCategory })(
  AllCategories
);
