import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  {
    let { book, currShelf, shelfChanger } = props;
    const { imageLinks, authors, publishedDate, title } = book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                imageLinks ? imageLinks.thumbnail : "icons/book-placeholder.svg"
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => shelfChanger(book, event.target.value)}
              value={currShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(",")}</div>
        <div className="book-published-date">{publishedDate}</div>
      </div>
    );
  }
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfChanger: PropTypes.func.isRequired,
  currShelf: PropTypes.string.isRequired,
};
export default Book;
