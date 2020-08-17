import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import DetailsForm from "./DetailsForm";
import { fetchOrder, deleteOrder, updateAddress } from "../../actions/order";
import { redirectToPaytm } from "../../actions/payment";
import "./css/OrderPage.css";
import Loader from "../layout/Loader";
import PaymentModal from "./PaymentModal";

const OrderPage = ({
  fetchOrder,
  deleteOrder,
  updateAddress,
  order,
  order: { products, total, billingDetails },
  match,
  billingDetailsUpdated,
  user,
  redirectToPaytm,
}) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    mobileNumber: "",
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    fetchOrder(match.params.orderId);
  }, []);

  const handleBilling = async (e) => {
    e.preventDefault();
    const addressUpdate = details.address;
    console.log(details);
    updateAddress(order._id, details);
  };
  // if (billingDetailsUpdated == true) {
  //   setModalShow(true);
  // }
  const [modalShow, setModalShow] = React.useState(false);

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
            <PaymentModal
              order={order}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <DetailsForm
              handleBilling={handleBilling}
              billingDetails={billingDetails}
              details={details}
              setDetails={setDetails}
            />
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
            <button
              className="payment-modal"
              disabled={billingDetailsUpdated ? false : true}
              onClick={(e) => {
                e.preventDefault();
                setModalShow(true);
              }}
            >
              Pay
            </button>
            {billingDetailsUpdated ? null : (
              <div className="text-danger">
                Update billing details to proceed
              </div>
            )}
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
  user: state.auth.user,
  billingDetailsUpdated: state.order.billingDetailsUpdated,
});

export default connect(mapStateToProps, {
  fetchOrder,
  deleteOrder,
  redirectToPaytm,
  updateAddress,
})(OrderPage);
