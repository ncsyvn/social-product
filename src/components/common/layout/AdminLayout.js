import AdminHeader from "../header/AdminHeader";
import AdminNavBar from "../navbar/AdminNavbar";
import Footer from "../footer/Footer";
import "./AdminLayout.scss";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminHeader></AdminHeader>
      <div className="main-page">
        <AdminNavBar></AdminNavBar>
        <div className="page-wrapper">
          <div className="content-page">{children}</div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
