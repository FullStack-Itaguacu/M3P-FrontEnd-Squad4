import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Products from "../components/Products";
import ExtraCardsInfo from "../components/ExtraCardsInfo";
import Footer from "../components/Footer";

const MarketplacePage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "190px", flex: 1 }}>
          <Slider />
          <Title />
          <Products />
          <ExtraCardsInfo />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
