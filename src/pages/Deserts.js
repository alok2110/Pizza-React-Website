import React from "react";
import Products from "../components/Products";
import { productDataTwo } from "../components/Products/data";


const Deserts = () => {
    return(
        <>
        <Products heading="Sweet Treats for You" data={productDataTwo} />
        </>
    )
}

export default Deserts;