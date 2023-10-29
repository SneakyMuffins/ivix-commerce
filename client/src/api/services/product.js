import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/product";
import { GRAPHQL_API_URL } from "../config";

const httpLink = createHttpLink({
  uri: GRAPHQL_API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const fetchProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
    });

    return data.products;
  } catch (error) {
    throw error;
  }
};
