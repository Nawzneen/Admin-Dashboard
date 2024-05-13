import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import Layout from "@/components/layout";
Amplify.configure(awsExports);
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@/styles/globals.css";
function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default withAuthenticator(App);
