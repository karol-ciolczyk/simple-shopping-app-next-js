import { BasketTable } from "../../components/BasketTable";
import { MainNavbar } from "../../components/MainNavbar";

const Basket = function () {
  if (typeof window !== "undefined") {
    // localStorage code here
    console.log(window["localStorage"].products);
    // const jsonObject = JSON.stringify(products.basket);
    // window["localStorage"].setItem("products", jsonObject);
  }

  return (
    <>
      <MainNavbar />
      <BasketTable />;
    </>
  );
};

export default Basket;
