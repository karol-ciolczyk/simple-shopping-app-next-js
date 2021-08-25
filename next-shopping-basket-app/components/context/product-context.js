import React from "react";

const ProductContext = React.createContext({
  products: [],
  basket: [],
});

export default ProductContext;
