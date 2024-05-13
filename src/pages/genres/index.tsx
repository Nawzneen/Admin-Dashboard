import { Heading, Flex, Button } from "@aws-amplify/ui-react";
import { TableValues } from "@/types/types";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListGenresQuery } from "@/API";
// import { API } from "aws-amplify"; / No longer supported
import { generateClient } from "aws-amplify/api";
import ItemsTable from "@/components/items-table";
export default function Genre() {
  const client = generateClient();
  const router = useRouter();
  const [genres, setGenres] = React.useState<TableValues[]>();
  useEffect(() => {
    async function grabGenres() {
      const allGenres = await client.graphql<GraphQLQuery<ListGenresQuery>>({
        query: queries.listGenres,
      });
      setGenres(allGenres.data?.listGenres?.items as TableValues[]);
    }
    grabGenres();
  }, []);
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=""
      >
        <Heading level={1}>Genres</Heading>
        <Button variation="primary" onClick={() => router.push("/genres/new")}>
          Create Genre
        </Button>
      </Flex>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=" mt-4"
      >
        {genres === undefined ? null : (
          <ItemsTable tableName="Genres" data={genres}></ItemsTable>
        )}
      </Flex>
    </>
  );
}
