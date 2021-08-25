import React, { useEffect, useState } from "react";
import { MainNavbar } from "./MainNavbar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { ProductCard } from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    width: "100%",
  },
  navbar: {
    marginBottom: "50px",
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

  useEffect(() => {
    if (products.basket.length < 1) return;
    if (typeof window !== "undefined") {
      console.log("EFFECT", window.localStorage.products);

      // localStorage code here
      // console.log(window["localStorage"].products);
      const jsonObject = JSON.stringify(products.basket);
      window["localStorage"].setItem("products", jsonObject);
    }
  }, [products.basket]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage code here
      // console.log(window["localStorage"].products);
      const jsonObj = window["localStorage"].products;
      const products = JSON.parse(jsonObj);
      console.log(products);
      setProducts((prev) => {
        return {
          ...prev,
          basket: [...prev.basket, ...products],
        };
      });
      // window["localStorage"].setItem("products", jsonObject);
    }
  }, []);

  const addToBasketHandler = function (productId) {
    const selectedProduct = products.data.filter(
      (product) => product.id === event.target.dataset.id
    )[0];
    // console.log(selectedProduct);
    setProducts((prev) => {
      return {
        ...prev,
        basket: [...prev.basket, selectedProduct],
      };
    });
    console.log(event.target.dataset.id);
  };
  const classes = useStyles();

  console.log(products.basket);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.container}
    >
      <Grid xs={12} item className={classes.navbar}>
        {" "}
        <MainNavbar itemsNumber={products.basket.length} />{" "}
      </Grid>
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
