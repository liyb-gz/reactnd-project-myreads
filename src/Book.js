import React from "react";

function Book(props) {
  const { book } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <img
            className="book-cover"
            style={{
              width: 128,
              //   backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
            src={book.imageLinks.smallThumbnail}
            alt={book.title}
          />
          <div className="book-shelf-changer">
            <select>
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
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;