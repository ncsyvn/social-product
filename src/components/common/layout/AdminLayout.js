import AdminHeader from "../header/AdminHeader";
import AdminNavBar from "../navbar/AdminNavbar";
import Footer from "../footer/Footer";
import "./AdminLayout.scss";

const AdminLayout = ({ children }) => {
  return (
    <div class="admin-layout">
      <AdminHeader></AdminHeader>
      <div class="main-page">
        <AdminNavBar></AdminNavBar>
        <div class="page-wrapper">
          <div class="content-page">{children}</div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
