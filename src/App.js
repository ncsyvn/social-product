import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminCustomer from "./pages/admin/customer/index";
import AdminHelp from "./pages/admin/help/index";
import AdminIndex from "./pages/admin/index/index";
import AdminProduct from "./pages/admin/product/index";
import AdminReport from "./pages/admin/report/index";
import AdminSetting from "./pages/admin/setting/index";

const Home = () => <h1>Home</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
        <Route path="/admin/index" element={<AdminIndex />}>
          <Route index element={<AdminIndex />} />
        </Route>
        <Route path="/admin/customer" element={<AdminCustomer />}>
          <Route index element={<AdminCustomer />} />
        </Route>
        <Route path="/admin/product" element={<AdminProduct />}>
          <Route index element={<AdminProduct />} />
        </Route>
        <Route path="/admin/report" element={<AdminReport />}>
          <Route index element={<AdminReport />} />
        </Route>
        <Route path="/admin/setting" element={<AdminSetting />}>
          <Route index element={<AdminSetting />} />
        </Route>
        <Route path="/admin/help" element={<AdminHelp />}>
          <Route index element={<AdminHelp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
