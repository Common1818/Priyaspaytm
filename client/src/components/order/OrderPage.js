import React, { useEffect } from "react";
import { connect } from "react-redux";
import DetailsForm from "./DetailsForm";
import { fetchOrder, deleteOrder } from "../../actions/order";
import { Redirect } from "react-router-dom";
import "./css/OrderPage.css";
import Loader from "../layout/Loader";

const OrderPage = (props) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  const { fetchOrder, deleteOrder } = props;
  const { order } = props;
  const { products, total } = order;
  useEffect(() => {
    fetchOrder(props.match.params.orderId);
  }, []);

  console.log(order);

  if (localStorage.getItem("userId") == null) {
    return <Redirect to="/" />;
  }

  return (
    <div className="order-page-container container-lg">
      {products ? (
        <>
          {" "}
          <div className="row">
            <div className="col-sm-8">
              <div className="products">
                {products &&
                  products.map((prod) => {
                    return (
                      <div className="product">
                        <img src={prod.image} alt="" />
                        <div className="desc">
                          <h3>{prod.name}</h3>
                          <h3>{prod.price}</h3>
                          <h6>{prod.color}</h6>
                          <h6>X {prod.quantity}</h6>
                        </div>
                      </div>
                    );
                  })}

                <h2>SubTotal: {formatter.format(total)}</h2>
              </div>
            </div>
            <DetailsForm />
          </div>
          <div className="transac-buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteOrder(order._id);
              }}
            >
              Cancel
            </button>
            <button>Pay</button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order.order,
});

export default connect(mapStateToProps, { fetchOrder, deleteOrder })(OrderPage);
