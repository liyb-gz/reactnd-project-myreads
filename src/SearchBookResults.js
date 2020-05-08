import React from "react";
import Book from "./Book";

function SearchBookResults(props) {
  const { searchResult } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {!searchResult.error &&
          searchResult.map((book) => <Book book={book} key={book.id} />)}
      </ol>
    </div>
  );
}

export default SearchBookResults;
