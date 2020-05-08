import React from "react";
import Book from "./Book";

function Bookshelf(props) {
  const { books, shelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
