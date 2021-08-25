import { Button, Card } from "@material-ui/core";
import Link from "next/router";

export const MainPage = function () {
  return (
    <Card>
      <Link href="/products">
        <Button variant="contained"> Show Products</Button>
      </Link>

      <Link href="/shopping-basket">
        <Button variant="contained"> Go to shopping basket</Button>
      </Link>
    </Card>
  );
};
