import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK } from "../queries/queries";

const AddBook = () => {
  const { loading, data } = useQuery(GET_AUTHORS);

  const [addBookMutation] = useMutation(ADD_BOOK);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);

    addBookMutation({
      variables: {
        name,
        genre,
        authorId,
      },
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {loading ? (
            <option disabled>Loading Authors</option>
          ) : (
            data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })
          )}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
