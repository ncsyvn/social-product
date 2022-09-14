import "./AdminNavbar.scss";
import NavElement from "./NavElement";
import { navbar } from "../../../utils/utils";
import React, { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { deviceWidth } from "../../../utils/constants";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  console.log("Render admin navbar");
  const [indexNav, setIndexNav] = useState(0);
  const width = useWindowSize();
  const selectNav = (index) => {
    console.log(index);
    setIndexNav(index);
  };

  return (
    <div
      className="div-main-sidebar"
      style={{ position: width > deviceWidth.sm ? "relative" : "absolute" }}
    >
      {navbar.map((element, index) => {
        return (
          <Link to={element.link} key={index}>
            <NavElement
              key={index}
              title={element.title}
              iconPath={element.iconPath}
              isActive={index === indexNav ? true : false}
              index={index}
              selectNav={selectNav}
            ></NavElement>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSideBar;
