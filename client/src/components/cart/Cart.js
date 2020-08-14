import React, { useState, useEffect } from "react";
import "./css/cart.css";
import $ from "jquery";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuantityButton from "./QuantityButton";
import { createOrder } from "../../actions/order";

const Cart = ({ createOrder, order }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {}, [quantity]);

  const productsArray = JSON.parse(localStorage.getItem("cart")) || [];
  const [Cartitems, setCartitems] = useState(productsArray);
  useEffect(() => {}, [Cartitems]);
  console.log(Cartitems);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  var cartTotal = 0;
  var items = 0;
  productsArray.map((prod) => {
    const { quantity } = prod;
    const { price } = prod;
    items += parseInt(quantity);
    cartTotal += price * quantity;
    // console.log
  });

  // order related stuff

  const handleOrder = (e) => {
    console.log(Cartitems);
  };

  //
  const { loading, redirect } = order;
  const orderId = order.order._id;
  if (redirect == true) {
    localStorage.setItem("cart", JSON.stringify([]));
    return <Redirect to={"/order/" + orderId} />;
  }

  // console.log(newOrder);

  var index = 0;

  return (
    <div className="cart-container ">
      {Cartitems.length > 0 ? (
        <div className="row">
          <div className="col-sm-8 cart-items-container">
            <div>
              <h3>MyCart ({items})</h3>
              <span>
                <img src="https://www.svgrepo.com/show/47839/maps.svg" alt="" />
                Deliver To
                <input type="text" name="" id="" />
              </span>
            </div>

            <hr />
            {Cartitems &&
              Cartitems.map((product) => {
                index++;
                return (
                  <div className="prod row">
                    <div className="col-sm-3">
                      <div>
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                    <div className="col-sm-5"></div>
                    <div className="col-sm-4">
                      <h3> {product.name} </h3>
                      <h6>Color: {product.color} </h6>
                      <h6>By {product.brand}</h6>
                      <h6>Quantity:{quantity}</h6>
                      <h3> {formatter.format(product.price)}</h3>
                    </div>
                    <div className="cart-options">
                      <button
                        onClick={(e) => {
                          const toRemove = Cartitems.indexOf(product);
                          console.log(productsArray);
                          console.log(toRemove);
                          productsArray.splice(toRemove, 1);
                          const cartItemNew = [...productsArray];
                          setCartitems(cartItemNew);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(Cartitems)
                          );
                        }}
                        className="remove"
                      >
                        Remove
                      </button>
                      <QuantityButton
                        Cartitems={Cartitems}
                        setCartitems={setCartitems}
                        defval={product.quantity}
                        product={product}
                        setQuantity={setQuantity}
                        quantity={product.quantity}
                      />
                    </div>
                    <hr />
                  </div>
                );
              })}
            <hr />
            <div className="place-order">
              <button onClick={handleOrder}>Place Order</button>
            </div>
          </div>
          <div className="col-sm-4"></div>
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
