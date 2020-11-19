import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Read = (props) => {
  let { books, shelfChanger } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "read")
            .map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelfChanger={shelfChanger}
                  currShelf="read"
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
Read.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
};
export default Read;
