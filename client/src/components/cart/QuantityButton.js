import React from "react";

const QuantityButton = ({
  setQuantity,
  quantity,
  defval,
  product,
  Cartitems,
  setCartitems,
}) => {
  return (
    <div
      className="quantity-button-cont"
      style={{
        display: "flex",
        height: "32px",
        width: "98px",
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
        }}
      >
        -
      </button>

      <div style={{ flex: "1" }}>
        <input
          onChange={(e) => {
            const toUpdate = Cartitems.indexOf(product);
            const prod = Cartitems[toUpdate];
            prod.quantity = e.target.value;
            localStorage.setItem("cart", JSON.stringify(Cartitems));
            console.log(toUpdate);
          }}
          type="number"
          placeholder={quantity}
          style={{
            height: "100%",
            textAlign: "center",
            width: "100%",
          }}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setQuantity(quantity++);
        }}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
