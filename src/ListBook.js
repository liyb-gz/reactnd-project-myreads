import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

export class ListBook extends Component {
  bookshelves = [
    {
      name: "Currently Reading",
      id: "currentlyReading",
    },
    {
      name: "Want to Read",
      id: "wantToRead",
    },
    {
      name: "Read",
      id: "read",
    },
  ];
  render() {
    const { books } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.bookshelves.map((bookshelf) => (
              <Bookshelf
                key={bookshelf.id}
                books={books.filter((book) => book.shelf === bookshelf.id)}
                shelf={bookshelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBook;
