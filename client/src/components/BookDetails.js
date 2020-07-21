import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  const displayBookDetails = (data) => {
    if (data) {
      const { book } = data;
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected yet</div>;
    }
  };

  return <div id="book-details">{displayBookDetails(data)}</div>;
};

export default BookDetails;
