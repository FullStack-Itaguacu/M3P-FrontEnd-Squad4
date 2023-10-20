import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Title from "../components/Title";
import Products from "../components/Products";
import ExtraCardsInfo from "../components/ExtraCardsInfo";

const MarketplacePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Title />
      <Products />
      <ExtraCardsInfo />
    </div>
  );
};

export default MarketplacePage;
