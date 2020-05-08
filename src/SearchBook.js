import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBookResults from "./SearchBookResults";
import SearchBookInput from "./SearchBookInput";

export class SearchBook extends Component {
  state = {
    searchResult: [],
  };

  updateSearchResult = (result) => {
    if (!result || result.error) {
      this.setState({ searchResult: [] });
    } else {
      this.setState({ searchResult: result });
    }
  };

  render() {
    const { searchResult } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <SearchBookInput updateSearchResult={this.updateSearchResult} />
        </div>
        <SearchBookResults searchResult={searchResult} />
      </div>
    );
  }
}

export default SearchBook;
