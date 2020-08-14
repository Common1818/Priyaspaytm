import React from "react";
import loading from "./loading.gif";

const Loader = () => {
  return (
    <div className="container-sm">
      <img style={{ width: "100vw" }} src={loading} alt="Now loading" />
    </div>
  );
};

export default Loader;
