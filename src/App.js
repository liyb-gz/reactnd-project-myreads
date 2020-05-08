import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import "./App.css";
import SearchBook from "./SearchBook";
import ListBook from "./ListBook";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  changeBookShelf = (bookToChange, newShelf) => {
    BooksAPI.update(bookToChange, newShelf).then(() => {
      this.setState((prevState) => ({
        books: [
          ...prevState.books.filter((book) => book.id !== bookToChange.id),
          {
            ...bookToChange,
            shelf: newShelf,
          },
        ],
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook
              books={books}
              onChangeShelf={(book, shelf) => {
                this.changeBookShelf(book, shelf);
                history.push("/");
              }}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <ListBook books={books} onChangeShelf={this.changeBookShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
