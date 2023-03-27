import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

const activityMiddleware = new ApolloLink((operation, forward) => {
  // add the recent-activity custom header to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-tenantid': 2,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, activityMiddleware, httpLink]),
});

export default client;
