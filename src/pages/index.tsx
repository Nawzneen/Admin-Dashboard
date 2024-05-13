import Image from "next/image";
import { Inter } from "next/font/google";
import { Heading, Button, Flex, useAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";
import { Product } from "@/API";
import { GraphQLQuery, generateClient } from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import { ListProductsQuery } from "@/API";
import ProductsTable from "@/components/products-table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const client = generateClient();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [products, setProducts] = React.useState<Product[]>();
  useEffect(() => {
    async function grabProducts() {
      const allProducts = await client.graphql<GraphQLQuery<ListProductsQuery>>(
        {
          query: queries.listProducts,
        }
      );

      setProducts(allProducts.data?.listProducts?.items as Product[]);
    }
    grabProducts();
  }, []);
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        {/* <Heading level={1}>Hello World</Heading> */}
        <Button onClick={signOut} variation="primary">
          Sign Out
        </Button>
        <Heading level={2}>All Products</Heading>
      </Flex>
      {products === undefined ? null : (
        <ProductsTable data={products}></ProductsTable>
      )}
    </>
  );
}
