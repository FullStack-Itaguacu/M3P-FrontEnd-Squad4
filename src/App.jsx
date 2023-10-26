import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketplacePage from "./pages/MarketplacePage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
