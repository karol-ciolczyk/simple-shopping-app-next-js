import { Button, Card, Typography } from "@material-ui/core";
import Link from "next/link";
import { MainNavbar } from "./MainNavbar";

import style from "./MainPage.module.css";

export const MainPage = function () {
  const onClickHandler = function (event) {
    console.log(event.target.name);
  };

  return (
    <>
      <MainNavbar />
      <Card className={style.card} elevation={3}>
        <Typography variant="h5"> Welcome to our store </Typography>
        <div className={style.buttons}>
          <Link href="/products" passHref>
            <Button
              value="products"
              variant="contained"
              color="secondary"
              onClick={onClickHandler}
            >
              Show Products
            </Button>
          </Link>
          <Link href="/basket" passHref>
            <Button
              name="shopping-basket"
              variant="contained"
              color="secondary"
            >
              shopping basket
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};
