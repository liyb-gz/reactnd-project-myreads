import React from "react";

function Book(props) {
  const { book, onChangeShelf } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <img
            className="book-cover"
            style={{
              width: 128,
            }}
            src={
              // For books that has no image links, use the default book icon
              book.imageLinks ? book.imageLinks.smallThumbnail : "./book.png"
            }
            alt={book.title}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf || "none"}
              onChange={(e) => {
                const newShelf = e.target.value;
                onChangeShelf(book, newShelf);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {/* Make sure book authors exist */
        book.authors && (
          <div className="book-authors">{book.authors.join(", ")}</div>
        )}
      </div>
    </li>
  );
}

export default Book;
