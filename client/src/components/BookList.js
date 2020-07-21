import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";

import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS);
  const [selected, setSelected] = useState("");
  return (
    <div>
      <ul id="book-list">
        {loading ? (
          <div>Loading books...</div>
        ) : (
          data.books.map((book) => {
            return (
              <li
                key={book.id}
                onClick={(e) => {
                  setSelected(book.id);
                }}
              >
                {book.name}
              </li>
            );
          })
        )}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
