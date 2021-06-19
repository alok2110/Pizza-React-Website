import React from "react";
import { productData } from "../components/Products/data";
import Products from "../components/Products";

const Pizzas = () => {
    return(
        <>
        <Products heading="Choose your favorite" data={productData} />
        </>
    )
}

export default Pizzas;