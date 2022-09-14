import AdminHeader from "../header/AdminHeader";
import AdminNavBar from "../navbar/AdminNavbar";
import Footer from "../footer/Footer";
import "./AdminLayout.scss";
import useWindowSize from "../../../hooks/useWindowSize";
import { deviceWidth } from "../../../utils/constants";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
  console.log("Render admin layout");
  const width = useWindowSize();
  const [onSidebar, setOnSidebar] = useState(true);
  useEffect(() => {
    console.log("width", width);
    if (width < deviceWidth.sm) {
      setOnSidebar(false);
    }
    else {
      setOnSidebar(true);
    }
  }, [width])
  return (
    <div className="admin-layout">
      <AdminHeader setOnSidebar={setOnSidebar}></AdminHeader>
      <div className="main-page">
        {onSidebar ? (
          <AdminNavBar></AdminNavBar>
        ) : null}
        <div className="page-wrapper">
          <div className="content-page">{children}</div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
