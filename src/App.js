import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import Bookshelf from "./Bookshelf";

import "./App.css";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  bookshelves = [
    {
      name: "Currently Reading",
      id: "currentlyReading",
    },
    {
      name: "Want to Read",
      id: "wantToRead",
    },
    {
      name: "Read",
      id: "read",
    },
  ];
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route
          path="/"
          exact
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.bookshelves.map((bookshelf) => (
                    <Bookshelf
                      key={bookshelf.id}
                      books={books.filter(
                        (book) => book.shelf === bookshelf.id
                      )}
                      shelf={bookshelf}
                    />
                  ))}
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
