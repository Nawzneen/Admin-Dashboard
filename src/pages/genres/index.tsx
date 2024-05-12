import { Heading, Flex, Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
export default function Genre() {
  const router = useRouter();
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="underline"
    >
      <Heading level={1}>Genres</Heading>
      <Button variation="primary" onClick={() => router.push("/genres/new")}>
        Create Genre
      </Button>
    </Flex>
  );
}
