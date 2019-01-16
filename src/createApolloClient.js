import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: "https://api-euwest.graphcms.com/v1/cjqz75ho1b86701dndqo1lp41/master"
  });

  const authLink = setContext((_, { headers }) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiODE5NzY2NDktODVhYy00NDdmLWJlOTEtMzVhYWJhOGQ4YThhIn0.UYqemg3FXxaJXnG_bLq3gbZ2CVYUSUd8GmE1IrkradU";
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};
