import { useEffect, useState } from "react";
import { BasketTable } from "../../components/BasketTable";
import { MainNavbar } from "../../components/MainNavbar";

const Basket = function () {
  const [prducts, setPrducts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage code here
      // console.log(window["localStorage"].products);
      const jsonObj = window["localStorage"].products;
      const basketState = JSON.parse(jsonObj);
      console.log(basketState);
      setPrducts(basketState);
      // window["localStorage"].setItem("products", jsonObject);
    }
  }, []);

  return (
    <>
      <MainNavbar itemsNumber={prducts.length} />
      <BasketTable products={prducts} />;
    </>
  );
};

export default Basket;
