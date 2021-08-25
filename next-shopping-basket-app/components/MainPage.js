import { Button, Card } from "@material-ui/core";
import Link from "next/link";

export const MainPage = function () {
  const onClickHandler = function (event) {
    console.log(event.target.name);
  };

  return (
    <Card>
      <Link href="/products" passHref>
        <Button value="products" variant="contained" onClick={onClickHandler}>
          Show Products
        </Button>
      </Link>
      <Link href="/shoppig-basket" passHref>
        <Button name="shopping-basket" variant="contained">
          Go to shopping basket
        </Button>
      </Link>
    </Card>
  );
};
