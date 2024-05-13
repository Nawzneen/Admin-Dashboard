import { Heading, Flex, Button } from "@aws-amplify/ui-react";
import { TableValues } from "@/types/types";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListProductsQuery } from "@/API";
// import { API } from "aws-amplify"; / No longer supported
import { generateClient } from "aws-amplify/api";
import ItemsTable from "@/components/items-table";
export default function Genre() {
  const client = generateClient();
  const router = useRouter();
  const [products, setProducts] = React.useState<TableValues[]>();
  useEffect(() => {
    async function grabProducts() {
      const allProdcuts = await client.graphql<GraphQLQuery<ListProductsQuery>>(
        {
          query: queries.listGenres,
        }
      );
      setProducts(allProdcuts.data?.listProducts?.items as TableValues[]);
    }
    grabProducts();
  }, []);
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=""
      >
        <Heading level={1}>Products</Heading>
        <Button
          variation="primary"
          onClick={() => router.push("/products/new")}
        >
          Create Product
        </Button>
      </Flex>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=" mt-4"
      >
        {products === undefined ? null : (
          <ItemsTable tableName="Products" data={products}></ItemsTable>
        )}
      </Flex>
    </>
  );
}
