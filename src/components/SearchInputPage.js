import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../App.css";

class SearchInputPage extends Component {
  state = { fetchedBooks: [], query: "" };

  /*handleQuery = (query) => {
    //let query = this.state.query;
    this.setState({ query: query.target.value });
    this.handleFetchedBooks(query);
    //console.log(query);
  };*/
  handleQuery = (query) => {
    this.setState({ query: query });
    this.handleFetchedBooks(query);
  };

  handleFetchedBooks = (query) => {
    //console.log("Hello from handleFetched func => query ", query);
    if (query) {
      BooksAPI.search(query).then((fetchedBooks) => {
        if (fetchedBooks.error) {
          this.setState({ fetchedBooks: [] });
        } else {
          this.setState({ fetchedBooks: fetchedBooks });
        }
      });
    } else {
      this.setState({ fetchedBooks: [] });
    }
  };
  render() {
    //console.log(BooksAPI.search);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search">
            <Link to="/">
              {/* <button className="close-search" /> */}
              <i className="fas fa-arrow-left close-search">close</i>
            </Link>
          </div>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.handleQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.fetchedBooks.map((book) => {
              const bookOnShelf = this.props.cmpBooks.find(
                ({ id }) => id === book.id
              );
              const shelfStatus = bookOnShelf ? bookOnShelf.shelf : "none";

              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelfChanger={this.props.shelfChanger}
                    currShelf={shelfStatus}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

SearchInputPage.propTypes = {
  shelfChanger: PropTypes.func.isRequired,
};
export default SearchInputPage;
