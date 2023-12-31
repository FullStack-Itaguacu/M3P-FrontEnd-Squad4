import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketplacePage from "./pages/MarketplacePage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginUser from "./pages/LoginUser";
import AdminLoginPage from "./pages/AdminLoginPage";
import UserSignup from "./pages/UserSignup";
import SaleAdmin from "./pages/SaleAdmin";
import InitialPageAdmin from "./pages/InitialPageAdmin";
import RegisterProductPage from "./pages/RegisterProductPage"
import AdminSignupPage from "./pages/AdminSignupPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MarketplacePage/>} />
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/sales/admin" element={<SaleAdmin />} />
        <Route path="/initial-page-user" element={<InitialPageAdmin />} />
        <Route path="/register-product" element={<RegisterProductPage />} />
        <Route path="/user/admin/signup" element={<AdminSignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;