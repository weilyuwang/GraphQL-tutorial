import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

/*
  Once your ApolloProvider is hooked up, you're ready to 
  start requesting data with useQuery. 
  useQuery is a React hook that use the Hooks API to share 
  GraphQL data with your UI.
*/
const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);

  return (
    <div>
      <ul id="book-list">
        {loading ? (
          <div>Loading books...</div>
        ) : (
          data.books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default BookList;
