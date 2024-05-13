import { Heading, Flex } from "@aws-amplify/ui-react";
import PlatformCreateForm from "@/ui-components/PlatformCreateForm";
import router from "next/router";

export default function PlatformNew() {
  return (
    <>
      <Heading level={1}>Create New Platform</Heading>
      <Flex justifyContent="center">
        <PlatformCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push("/platforms")}
        ></PlatformCreateForm>
      </Flex>
    </>
  );
}
