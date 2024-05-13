import { Heading, Flex, Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { TableValues } from "@/types/types";
import React, { useEffect } from "react";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListPlatformsQuery } from "@/API";
import { generateClient } from "aws-amplify/api";
import ItemsTable from "@/components/items-table";
export default function Platform() {
  const client = generateClient();
  const router = useRouter();
  const [platforms, setPlatforms] = React.useState<TableValues[]>();
  useEffect(() => {
    async function grabPlatforms() {
      const allPlatforms = await client.graphql<
        GraphQLQuery<ListPlatformsQuery>
      >({
        query: queries.listPlatforms,
      });
      setPlatforms(allPlatforms.data?.listPlatforms?.items as TableValues[]);
    }
    grabPlatforms();
  }, []);
  console.log(platforms);
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=""
      >
        <Heading level={1}>Platforms</Heading>
        <Button
          variation="primary"
          onClick={() => router.push("/platforms/new")}
        >
          Create Platform
        </Button>
      </Flex>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className=" mt-4"
      >
        {platforms === undefined ? null : (
          <ItemsTable tableName="Platforms" data={platforms}></ItemsTable>
        )}
      </Flex>
    </>
  );
}
