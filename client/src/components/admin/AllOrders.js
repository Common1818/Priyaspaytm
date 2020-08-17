import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllOrders } from "../../actions/order";
import Loader from "../layout/Loader";

const AllOrders = ({ orders, getAllOrders, loadingComplete }) => {
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="all-categories container-fluid">
      <h3>All Orders</h3>
      {loadingComplete == true ? (
        <table>
          <tbody>
            <tr>
              <th>OrderDate</th>
              <th>Status</th>
              <th>total</th>
              <th>Quantity</th>
            </tr>
            {orders &&
              orders.map((order) => {
                return (
                  <tr key={order._id}>
                    <td>{order.createdAt}</td>
                    <td>{order.status}</td>
                    <td>{order.total}</td>
                    <td>{order.totalQuantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  loadingComplete: state.order.loadingComplete,
});

export default connect(mapStateToProps, { getAllOrders })(AllOrders);
