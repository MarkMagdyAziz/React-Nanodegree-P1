import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const WantToReadShelf = (props) => {
  let { books, shelfChanger } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "wantToRead")
            .map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelfChanger={shelfChanger}
                  currShelf="wantToRead"
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
WantToReadShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
};
export default WantToReadShelf;
