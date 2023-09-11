import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../lib/apollo";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
}

// return (
//   <ApolloProvider client={apolloClient}>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   </ApolloProvider>
// )
