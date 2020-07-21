import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
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
