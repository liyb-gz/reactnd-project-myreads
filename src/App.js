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
  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route path="/" exact render={() => <ListBook books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
