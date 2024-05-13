import { Heading, Flex } from "@aws-amplify/ui-react";
import ProductCreateForm from "@/ui-components/ProductCreateForm";
import router from "next/router";

export default function ProductNew() {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Heading level={1} className="my-10">
          Create New Product
        </Heading>
        <ProductCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push("/products")}
        ></ProductCreateForm>
      </Flex>
    </>
  );
}
