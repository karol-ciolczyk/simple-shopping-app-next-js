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
  container_container: {
    width: "100%",
    padding: "70px 100px 0px 100px",
    // margin: "auto",
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
    filtered: props.products,
  });
  const classes = useStyles();

  useEffect(() => {
    if (products.basket.length < 1) return;
    if (typeof window !== "undefined") {
      const jsonObject = JSON.stringify(products.basket);
      window["localStorage"].setItem("products", jsonObject);
    }
  }, [products.basket]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage code here
      // console.log(window["localStorage"].products);
      const jsonObj = window["localStorage"].products;
      if (!jsonObj) return;
      const products = JSON.parse(jsonObj);
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
      (product) => product.id === productId
    )[0];
    // console.log(selectedProduct);
    setProducts((prev) => {
      return {
        ...prev,
        basket: [...prev.basket, selectedProduct],
      };
    });
    console.log(productId);
  };

  const onSearchInputHandler = function (event) {
    const serchedValue = event.target.value.replace(/ /g, "");
    const filtered = products.data.filter((product) =>
      product.name.toLowerCase().replace(/ /g, "").includes(serchedValue)
    );
    setProducts((prev) => {
      return {
        ...prev,
        filtered,
      };
    });
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.container}
    >
      <Grid xs={12} item className={classes.navbar}>
        {" "}
        <MainNavbar
          itemsNumber={products.basket.length}
          onSearchInputHandler={onSearchInputHandler}
          searchInput={props.searchInput}
        />{" "}
      </Grid>
      <Grid
        justifyContent="center"
        container
        spacing={2}
        className={classes.container_container}
      >
        {products.filtered.map((product) => (
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
    </Grid>
  );
}
