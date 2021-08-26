import React, { useState } from "react";
import { MenuProvider } from "./context/product-context.js";

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  button: {
    backgroundColor: "#556cd6",
    color: "white",
    border: "0px",
    padding: "6px 8px",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4b5fbf",
    },
  },
}));

export const ProductCard = function (props) {
  // const [products, setProducts] = useState({
  //   data: props.productsObject,
  //   basket: [],
  // });
  const classes = useStyles();

  const onClickHandler = function (event) {
    props.addToBasketHandler(event.target.dataset.id);
  };

  return (
    // <MenuProvider value={products.basket}>
    <Card className={classes.root} elevation={3}>
      <Link href={`/products/${props.id}`} passHref>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <div className={classes.actionCard}>
        <Typography variant="subtitle2">Price: ${props.price}</Typography>
        <button
          data-id={props.id}
          onClick={onClickHandler}
          className={classes.button}
        >
          add to basket
        </button>
      </div>
    </Card>
    // </MenuProvider>
  );
};
