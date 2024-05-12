import Image from "next/image";
import { Inter } from "next/font/google";
import { Heading, Button, Flex, useAuthenticator } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Heading level={1}>Hello World</Heading>
        <Button onClick={signOut} variation="primary">
          Sign Out
        </Button>
      </Flex>
    </>
  );
}
