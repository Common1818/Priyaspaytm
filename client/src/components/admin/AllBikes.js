import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllBikes } from "../../actions/product";
import { connect } from "react-redux";

const AllBikes = ({ fetchAllBikes, products }) => {
  useEffect(() => {
    fetchAllBikes();
  }, []);

  const productsArray = products && products;
  return (
    <div className="all-categories container-fluid">
      <h3>All Bikes</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Color</th>
          </tr>

          {productsArray &&
            productsArray.map((product) => {
              return (
                <tr id={product._id}>
                  <td>
                    <Link to={"/product/" + product._id}> {product.name}</Link>
                  </td>
                  <td>{product.category.name}</td>
                  <td>{product.brand.brandname}</td>
                  <td>{product.color}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="status">
        {/* <span>{deleteMessage && deleteMessage.message}</span> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { fetchAllBikes })(AllBikes);
