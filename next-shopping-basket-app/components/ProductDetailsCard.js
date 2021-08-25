import { Button, Card, Typography } from "@material-ui/core";
import React from "react";

import style from "./ProductDetailsCard.module.css";

export const ProductDetailsCard = function (props) {
  return (
    <Card className={style.card} elevation={3}>
      <img src={props.src}></img>
      <div className={style.description}>
        <Typography variant="h4"> {props.name} </Typography>
        <Typography variant="h5"> {props.description} </Typography>
        <Button variant="contained" color="secondary">
          {" "}
          Add to basket{" "}
        </Button>
      </div>
    </Card>
  );
};