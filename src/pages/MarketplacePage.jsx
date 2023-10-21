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
      <Sidebar />
      <Slider />
      <Title />
      <Products />
      <ExtraCardsInfo />
      <Footer />
    </div>
  );
};

export default MarketplacePage;
