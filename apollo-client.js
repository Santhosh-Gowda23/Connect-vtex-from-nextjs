import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const client = new ApolloClient({
  //   uri: "https://imprintapi--colgateb2b.myvtex.com/_v/private/colgateb2b.direct-backend@0.1.0/graphiql/v1", //URI for Custom Service
  uri: "https://colgateb2b.myvtex.com/api/io/_v/private/graphql/v1", //URI for VTex IO
  cache: new InMemoryCache(),
});

export default client;
