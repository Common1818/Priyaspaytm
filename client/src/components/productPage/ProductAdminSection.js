import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteBike } from "../../actions/product";

const ProductAdminSection = ({ productId, product, deleteBike }) => {
  const userId = localStorage.getItem("userId");
  console.log(productId);
  const handleDelete = () => {
    const val = window.prompt(
      "Are you sure you Want to delete? Enter: CONFIRM "
    );
    if (val === "CONFIRM") {
      deleteBike(productId, userId);
    }
  };

  return (
    <div className="product-admin-section-container">
      <div className="buttons">
        <Button>
          <Link to="/admin/product/addcolor">
            {" "}
            <span class="plus">+</span> Add Color
          </Link>
        </Button>
        <Button>
          <Link to={"/admin/update/product/" + productId}> EDIT</Link>
        </Button>
        <Button onClick={handleDelete}>DELETE</Button>
      </div>
    </div>
  );
};

export default connect(null, { deleteBike })(ProductAdminSection);
