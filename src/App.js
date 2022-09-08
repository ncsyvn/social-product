import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminCustomer from "./pages/admin/customer/index"
const Home = () => <h1>Home</h1>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
        <Route path="/admin/customer" element={<AdminCustomer />}>
          <Route index element={<AdminCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
