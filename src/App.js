import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchInputPage from "./components/SearchInputPage";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * TODO: Instead of using this state variable to keep track of which page
 * we're on, use the URL in the browser's address bar. This will ensure that
 * users can use the browser's back and forward buttons to navigate between
 * pages, as well as provide a good URL they can bookmark and share.
 */

/**
 * NOTES: The search from BooksAPI is limited to a particular set of search terms.
 * You can find these search terms here:
 * https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
 * However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
 * you don't find a specific author or title. Every search is limited by search terms.
 */
class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books: books }));
    });
  }
  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
      })
    );
  };
  render() {
    const { books } = this.state;
    //console.log("books", books);
    return (
      <div>
        <Router>
          <Route exact path="/">
            <MainPage books={books} shelfChanger={this.shelfChanger} />
          </Route>
          <Route path="/search">
            <SearchInputPage
              shelfChanger={this.shelfChanger}
              cmpBooks={books}
            />
          </Route>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
