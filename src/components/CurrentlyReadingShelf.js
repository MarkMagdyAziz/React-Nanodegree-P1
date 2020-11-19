import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const CurrentlyReadingShelf = (props) => {
  let { books, shelfChanger } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "currentlyReading")
            .map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelfChanger={shelfChanger}
                  currShelf="currentlyReading"
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
CurrentlyReadingShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
};
export default CurrentlyReadingShelf;
