import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    // Pass Apollo Client into ApolloProvider
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
