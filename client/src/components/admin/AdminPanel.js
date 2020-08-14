import React, { useState, useEffect } from "react";
import "./css/AdminPanel.css";
import "./css/Sidebar.css";
import SideMenu from "./SideMenu";
import DashboardHeading from "./DashboardHeading";

const AdminPanel = (props) => {
  const [comp, setcomp] = useState({
    comp: null,
  });
  const displayComp = (component) => {
    setcomp({
      comp: component,
    });
  };

  return (
    <div className="admin-container">
      <div id="container">
        <SideMenu displayComp={displayComp} />
        <div id="content">
          <DashboardHeading />
          {comp.comp}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
