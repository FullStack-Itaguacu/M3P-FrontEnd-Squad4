import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketplacePage from "./pages/MarketplacePage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginUser from './pages/LoginUser'
import AdminLoginPage from "./pages/AdminLoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
