import React from "react";
import Book from "./Book";

function Bookshelf(props) {
  const { books, shelfName } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
