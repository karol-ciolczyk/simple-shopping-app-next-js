import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

import { ProductCard } from "./ProductCard";

const PRODUCTS_DATA = [
  {
    id: "cdb58e09-1537-416f-9646-55a3d98518a8",
    image:
      "https://i.picsum.photos/id/672/640/480.jpg?hmac=Qh6HFl-tBzGwlPPjrHmcNfk7DJCnPEwD7ErC7fFxiM0",
    name: "Incredible Frozen Salad",
    price: "164.00",
    slug: "incredible-frozen-salad",
  },
  {
    id: "1ff7db58-9ab1-4fc5-acd8-8d4f8f76c173",
    image:
      "https://i.picsum.photos/id/354/640/480.jpg?hmac=pMKfo0IVIZ_UvabmPadnj1F7PSmS7ZudIVRqsUpGzhk",
    name: "Incredible Wooden Chicken",
    price: "226.00",
    slug: "incredible-wooden-chicken",
  },
  {
    id: "822e9cfa-0a94-49ee-b367-315ef02d72ad",
    image:
      "https://i.picsum.photos/id/912/640/480.jpg?hmac=UyA_9gNPvXZFHb1V5HUq_0VhWjiUcc164LInaVyUo4k",
    name: "Refined Cotton Chips",
    price: "152.00",
    slug: "refined-cotton-chips",
  },
];

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
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.container}
    >
      <Grid xs={12} item>
        <TextField
          id="outlined-basic"
          label="Search product"
          variant="outlined"
          onChange={inputValueHandler}
        />
      </Grid>
      {products.filtered &&
        products.filtered.map((product) => (
          <Grid key={product.id} item>
            <ProductCard />
          </Grid>
        ))}
    </Grid>
  );
}
