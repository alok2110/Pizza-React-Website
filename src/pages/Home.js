import React from "react";
import Feature from "../components/Feature";
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";

const Home = () => {
  return (
    <>
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
    </>
  );
};

export default Home;
