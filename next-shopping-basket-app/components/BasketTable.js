import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

import style from "./BasketTable.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    minWidth: "300px",
    margin: "50px 50px",
    padding: "50px",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    padding: "10px",
    margin: theme.spacing(0, 0, 2),
  },
}));

function generate(products, onDeleteItemHandler) {
  return products?.map((product, index) => {
    return (
      <div key={Math.random()}>
        <Card elevation={5} className={style.item}>
          <div className={style.contentItem}>
            <img className={style.img} src={product.image} alt="image" />
            <div className={style.content}>
              <Typography variant="subtitle1">{product.name}</Typography>
            </div>
          </div>
          <div className={style.contentItem}>
            <div className={style.content}>
              <Typography variant="h6" display="block">
                $ {product.price}
              </Typography>
            </div>
            <div
              className={`${style.content} ${style["content_button--toRight"]}`}
            >
              <button
                data-id={product.id}
                className={style.content_button}
                onClick={onDeleteItemHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  });
}

const removeProduct = function (id) {
  const products = JSON.parse(window.localStorage.products);
  const findedItems = products.filter((item) => item.id === id);
  findedItems.shift();
  const restItems = products.filter((item) => item.id !== id);
  const readyProducts = [...findedItems, ...restItems];
  return readyProducts;
};

export function BasketTable(props) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const jsonObj = window["localStorage"].products;
      const basketState = JSON.parse(jsonObj);
      setProducts(basketState);
    }
  }, []);

  const onDeleteItemHandler = function (event) {
    const id = event.target.dataset.id;

    const itemDeleted = removeProduct(id);
    console.log(itemDeleted);
    const jsonObject = JSON.stringify(itemDeleted);
    window.localStorage.setItem("products", jsonObject);
    setProducts(itemDeleted);
    props.setProducts(itemDeleted);
  };

  console.log(products);

  return (
    <Card elevation={3} className={classes.container}>
      <div className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title} align="center">
            Shopping basket
          </Typography>
          <div className={classes.demo}>
            {generate(products, onDeleteItemHandler)}
          </div>
        </Grid>
      </div>
    </Card>
  );
}
