import { ProductsContainer } from "../../components/ProductsContainer";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

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

const Products = function (props) {
  console.log(props);
  return <ProductsContainer products={props.products} />;
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      products: data.products,
    },
  };
}

export default Products;
