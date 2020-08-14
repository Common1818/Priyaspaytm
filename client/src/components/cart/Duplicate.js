import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createOrder } from "../../actions/order";
import "./css/cart.css";

const Cart = ({ createOrder, order }) => {
  const productsArray = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(productsArray);

  // currency formatted js mein inbuilt hai

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  var cartTotal = 0;
  var items = 0;
  productsArray.map((prod) => {
    const { quantity } = prod;
    const { price } = prod;
    console.log(quantity, price);
    console.log(price * quantity);
    items += parseInt(quantity);
    cartTotal += price * quantity;
    // console.log
  });

  // order related stuff

  const handleOrder = (e) => {
    createOrder({
      products: productsArray,
      total: cartTotal,
      totalQuantity: items,
    });
  };

  //
  const { loading, redirect } = order;
  const orderId = order.order._id;
  console.log(loading, redirect);
  if (redirect == true) {
    localStorage.setItem("cart", JSON.stringify([]));
    return <Redirect to={"/order/" + orderId} />;
  }

  // console.log(newOrder);

  var index = 0;
  return (
    <div className="cart-container">
      {productsArray.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="heading">
                <h2>Shopping Cart</h2>
                <span className="price">Price</span>
              </div>
              <div className="products">
                {productsArray &&
                  productsArray.map((product) => {
                    index++;
                    console.log(index);
                    return (
                      <div className="product">
                        <div>
                          <img className="prod" src={product.image} alt="" />
                        </div>
                        <div className="description">
                          <h3>
                            {product.name} <span>by {product.brand}</span>
                          </h3>
                          <div className="dispatch-msg">
                            * Usually dispatched in 1-2 days
                          </div>
                          <div className="dispatch-msg">
                            * Eligible for free shipping
                          </div>
                          <div
                            style={{ fontWeight: "800" }}
                            className="dispatch-msg text-danger"
                          >
                            COLOR : {product.color}
                          </div>
                          <div className="promise">
                            <img
                              src="http://localhost:3000/static/media/HomeDelivery.08f7b1b9.PNG"
                              alt=""
                            />
                            <img
                              src="http://localhost:3000/static/media/QualityCheck.dcc42716.PNG"
                              alt=""
                            />
                            <img
                              src="http://localhost:3000/static/media/Assembled.9a186ba8.PNG"
                              alt=""
                            />
                          </div>
                          <div className="options">
                            <div>
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();

                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify(productsArray)
                                  );
                                  window.location.reload();
                                }}
                              >
                                <label htmlFor="quantity">Quantity : </label>
                                <input
                                  onChange={(e) => {
                                    product.quantity = e.target.value;
                                  }}
                                  type="number"
                                  defaultValue={product.quantity}
                                  name="quantity"
                                  id=""
                                />
                                <button type="submit" className="update-count">
                                  Update
                                </button>
                              </form>
                            </div>
                            <button
                              onClick={() => {
                                productsArray.splice(index - 1, 1);
                                console.log(productsArray);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify(productsArray)
                                );
                                window.location.reload();
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="product-price">
                          {formatter.format(product.price)}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cart-total">
                <div className="top">
                  <h5 className="text-success">
                    * Part of your order qualifies for FREE Delivery. Select
                    this option at checkout.
                  </h5>
                </div>
                <div className="bottom">
                  <h3>Subtotal {items}: items</h3>
                  <h3> {formatter.format(cartTotal)}</h3>
                  <button onClick={handleOrder}>Proceed To Buy</button>
                </div>
              </div>
              <div className="brand-img-cart">
                <img
                  src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps, { createOrder })(Cart);
