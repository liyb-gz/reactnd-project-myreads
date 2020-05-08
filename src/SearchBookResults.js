import React from "react";
import Book from "./Book";

function SearchBookResults(props) {
  const { books, searchResult, onChangeShelf } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {!searchResult.error &&
          searchResult.map((bookInSearchResult) => (
            <Book
              book={
                books.find((book) => book.id === bookInSearchResult.id) ||
                bookInSearchResult
              }
              key={bookInSearchResult.id}
              onChangeShelf={onChangeShelf}
            />
          ))}
      </ol>
    </div>
  );
}

export default SearchBookResults;
