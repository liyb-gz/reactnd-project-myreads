import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

export class SearchBookInput extends Component {
  state = {
    query: "",
  };
  updateQuery = (e) => {
    const query = e.target.value;
    const { updateSearchResult } = this.props;

    this.setState({ query });
    BooksAPI.search(query).then((books) => {
      updateSearchResult(books);
    });
  };
  render() {
    const { query } = this.state;
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          onChange={this.updateQuery}
          placeholder="Search by title or author"
          value={query}
        />
      </div>
    );
  }
}

export default SearchBookInput;
