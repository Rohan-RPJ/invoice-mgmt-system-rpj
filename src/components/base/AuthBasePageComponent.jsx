import Link from "next/link";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0/client";
import BasePageComponent from "./BasePageComponent";

// Authenticated Base Page Component
const AuthBasePageComponent = withPageAuthRequired(
  ({ pageContent: PageContent, pageProps }) => {
    const { user } = useUser();
    return (
      <BasePageComponent
        pageContent={PageContent}
        pageProps={pageProps}
      />
    );
  }
);

export default AuthBasePageComponent;
