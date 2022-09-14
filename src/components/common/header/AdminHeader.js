import useWindowSize from "../../../hooks/useWindowSize";
import { deviceWidth } from "../../../utils/constants";
import React, { useEffect, useState } from "react";
import "./AdminHeader.scss";
import Icon from "../Icon";
import { Popover } from "antd";

const profileOption = (iconPath, title) => {
  return (
    <div className="div-profile-option">
      <Icon
        name={iconPath}
        color="#898989"
        forceColor="#898989"
        width="24px"
        height="24px"
        style={{ marginRight: "8px" }}
      ></Icon>
      <span style={{ color: "#898989" }}>{title}</span>
    </div>
  );
};
const contentProfile = (
  <div style={{ minWidth: "160px" }}>
    {profileOption("cm-profile.svg", "Profile")}
    {profileOption("cm-setting.svg", "Setting")}
    {profileOption("cm-logout.svg", "Log out")}
  </div>
);

const AdminHeader = ({ setOnSidebar }) => {
  console.log("render admin header");
  const width = useWindowSize();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfile, setShowProfile] = useState(true);
  useEffect(() => {
    if (width > deviceWidth.sm) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  }, [width]);
  return (
    <div
      className="div-main-header"
      style={{ flexWrap: width > deviceWidth.sm ? "nowrap" : "wrap" }}
    >
      <div
        className="div-logo"
        // Responsive logo in header
        // Only show ellipsis if deviceWidth < sm
        style={{
          minWidth: width > deviceWidth.sm ? "240px" : "100%",
          flexDirection: width > deviceWidth.sm ? "row" : "row-reverse",
        }}
      >
        {width > deviceWidth.sm ? null : (
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
          >
            <Icon
              name="ellipsis.svg"
              width="28px"
              height="28px"
              color="#ffffff"
              forceColor="#ffffff"
            ></Icon>
          </div>
        )}
        <img
          src="/images/logo.svg"
          alt="logo app"
          style={{ width: "140px" }}
        ></img>
        <div
          className="div-handle-sidebar"
          style={{ justifyContent: showSidebar ? "flex-end" : "flex-start" }}
          onClick={() => {
            setShowSidebar(!showSidebar);
            setOnSidebar(!showSidebar);
          }}
        >
          <div className="div-on-sidebar"></div>
        </div>
      </div>
      <div
        className="div-search-notify div-search-notify-animation"
        style={{ display: showProfile ? "flex" : "none" }}
      >
        <div className="div-search">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="bi bi-search i-search"></i>
            </span>
          </div>
        </div>
        <Popover
          placement="bottomRight"
          content={contentProfile}
          trigger="click"
        >
          <div className="div-profile">
            <img
              src="/images/avatar.png"
              alt="logo app"
              className="img-avt"
            ></img>
            <span className="span-username">Joohn Doe</span>
            <i className="bi bi-chevron-down" style={{ fontSize: "8px" }}></i>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default AdminHeader;
