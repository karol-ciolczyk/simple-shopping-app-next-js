import React from "react";
import client from "../../../apollo-client";
import { gql } from "@apollo/client";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard.js";

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      slug
      image
      price
      description
    }
  }
`;

const ProducDetails = function (props) {
  const { product } = props;
  console.log(product);

  return (
    <ProductDetailsCard
      src={product.image}
      name={product.name}
      description={product.description}
    />
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  const preparedObject = data.products.map((product) => {
    return {
      params: {
        productId: product.id,
      },
    };
  });

  return {
    fallback: false,
    paths: preparedObject,
  };
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  const productId = context.params.productId;
  const product = data.products.filter(
    (product) => product.id === productId
  )[0];

  console.log(product);

  return {
    props: {
      product,
    },
  };
}

export default ProducDetails;
