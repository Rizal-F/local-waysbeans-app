import React from "react";
import Jumbotron from "../../components/landingPage/Jumbotron";
import ProductSell from "../../components/landingPage/ProductSell";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
  const title = "Homepage";
  document.title = "WaysBeans | " + title;
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ProductSell />
    </div>
  );
};

export default HomePage;
