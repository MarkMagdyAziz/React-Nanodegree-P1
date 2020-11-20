import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CurrentlyReadingShelf from "./CurrentlyReadingShelf";
import WantToReadShelf from "./WantToReadShelf";
import Read from "./Read";

const MainPage = (props) => {
  const { books } = props;
  //console.log("books", this.props.books);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads APP</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReadingShelf
            books={books}
            shelfChanger={props.shelfChanger}
          />
          <WantToReadShelf books={books} shelfChanger={props.shelfChanger} />
          <Read books={books} shelfChanger={props.shelfChanger} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <i className="fas fa-times-circle open-search">open</i>
        </Link>
      </div>
    </div>
  );
};
MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
};
export default MainPage;
