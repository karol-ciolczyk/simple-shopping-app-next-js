import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { ProductCard } from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    marginTop: "50px",
    width: "80%",
  },
  root: {
    width: 250,
    height: 260,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
  actionCard: {
    display: "flex",
    justifyContent: "space-around",
    margin: "15px 0px",
    alignItems: "center",
  },
}));

export function ProductsContainer(props) {
  const [products, setProducts] = useState({
    data: props.products,
    basket: [],
  });

  if (typeof window !== "undefined") {
    // localStorage code here
    console.log(window["localStorage"].products);
    const jsonObject = JSON.stringify(products.basket);
    window["localStorage"].setItem("products", jsonObject);
  }

  const addToBasketHandler = function (productId) {
    const selectedProduct = products.data.filter(
      (product) => product.id === event.target.dataset.id
    )[0];
    console.log(selectedProduct);
    setProducts((prev) => {
      return {
        ...prev,
        basket: [...prev.basket, selectedProduct],
      };
    });
    console.log(event.target.dataset.id);
  };
  const classes = useStyles();

  console.log(products);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.container}
    >
      <Grid xs={12} item></Grid>
      {props.products.map((product) => (
        <Grid key={product.id} item>
          <ProductCard
            addToBasketHandler={addToBasketHandler}
            productsObject={props.products}
            id={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
          />
        </Grid>
      ))}
    </Grid>
  );
}
