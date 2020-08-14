import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="appIcon">
      <Link to="/">
        <img
          src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
          className="img-responsive center-block visible-xs"
          alt="bicycledrift.com"
          title="bicycledrift.com"
        />

        <img
          src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
          className="img-responsive center-block hidden-xs"
          alt="bicycledrift.com"
          title="bicycledrift.com"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
