import React from "react"
import noImageAvail from "./images/no_img_available.png"

import Select from "./Select"
class Book extends React.Component {
  render() {
    const { book, books, updateShelf } = this.props

    //  error handling for no cover / nor no author
    const bookCover =
      this.props.books.imageLinks && this.props.books.imageLinks.smallThumbnail
        ? this.props.books.imageLinks.smallThumbnail
        : noImageAvail

    const author = this.props.books.authors
      ? this.props.books.authors
      : "No author available"

    return (
      <li className="book-list-item">
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${bookCover})`
              }}
            />

            <Select book={book} books={books} updateShelf={updateShelf} />
          </div>

          <div className="book-title">{this.props.books.title}</div>
          <div className="book-authors">
            {" "}
            {this.props.books.authors
              ? this.props.books.authors.join(", ")
              : " "}{" "}
          </div>
          {/* <div className="book-authors"> {author ? author.join(', ') :' '} </div> */}

          <span> {this.props.books.publishedDate} </span>
        </div>
      </li>
    )
  }
}

export default Book
