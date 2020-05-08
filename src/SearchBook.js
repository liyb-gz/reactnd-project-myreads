import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBookResults from "./SearchBookResults";

export class SearchBook extends Component {
  state = {
    query: "",
    searchResult: [],
  };
  updateQuery = (e) => {
    const query = e.target.value;
    this.setState({ query });
    BooksAPI.search(query).then((books) => {
      this.setState({ searchResult: books || [] });
    });
  };
  render() {
    const { query, searchResult } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input
              type="text"
              onChange={this.updateQuery}
              placeholder="Search by title or author"
              value={query}
            />
          </div>
        </div>
        <SearchBookResults searchResult={searchResult} />
      </div>
    );
  }
}

export default SearchBook;
