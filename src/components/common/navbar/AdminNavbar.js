import "./AdminNavbar.scss";
import NavElement from "./NavElement";
import { navbar } from "../../../utils/utils";
import React, { useState } from "react";

const AdminSideBar = () => {
  const [indexNav, setIndexNav] = useState(0);
  const selectNav = (index) => {
    console.log(index);
    setIndexNav(index);
  };

  return (
    <div className="div-main-sidebar">
      {navbar.map((element, index) => {
        return (
          <NavElement
            key={index}
            title={element.title}
            iconPath={element.iconPath}
            isActive={index === indexNav ? true : false}
            index={index}
            selectNav={selectNav}
          ></NavElement>
        );
      })}
    </div>
  );
};

export default AdminSideBar;
