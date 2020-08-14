import React from "react";

const SidebarComp = () => {
  return (
    <div className="user-dashboard-side-comp">
      <ul className="menu">
        <img src="https://www.svgrepo.com/show/128722/profile.svg" alt="" />
        <h2>
          <small>Hey</small>, User!!!
        </h2>
      </ul>

      <ul class="menu comp">
        <li>My Orders</li>
      </ul>

      <ul class="menu comp">
        <li>My Addresses</li>
      </ul>

      <ul class="menu comp">
        <li>My Cart</li>
      </ul>

      <ul class="menu comp logout">
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default SidebarComp;
