import React from "react";
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";


const FullMenu = () => {
    return(
        <>
        <Products heading="Choose your favorite" data={productData} />
        <Products heading="Sweet Treats for You" data={productDataTwo} />
        </>
    )
}

export default FullMenu;