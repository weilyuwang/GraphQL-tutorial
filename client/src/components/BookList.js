import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

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
