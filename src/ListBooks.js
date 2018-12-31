import React from "react"

import { Link } from "react-router-dom"
import Select from "./Select"
import Book from "./Book"
import * as BooksAPI from "./BooksAPI.js"

class ListBooks extends React.Component {
  state = {
    query: "",
    searchedBooks: [],
    invalidQuery: false
  }

  //   TODO: pass the updateShelf function as props to the book component from within the component for the search page
  updateQuery = query => {
    this.setState(() => ({
      query: query
    }))

    BooksAPI.search(query).then(searchedBooks => {
      // check that query is not empty before calling API

      if (this.state.query !== "") {
        // check that searchedBooks.length is greater than 0
        if (searchedBooks.length > 0) {
          this.setState(() => ({
            searchedBooks
          }))
          searchedBooks.map(function(searchedbook) {
            return <Book books={searchedBooks} />
          })
          console.log("STATE ", this.state)
        }
      } else {
        this.setState(() => ({
          searchedBooks: [],
          invalidQuery: true,
          query: ""
        }))
      }
    })
  }

  render() {
    const { query, searchedBooks } = this.state
    const {book, books, updateShelf } = this.props

    return (
      <div>
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books">
          <div className="search-books-bar">
            <div className="search-books-input-wrapper">
              {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
          lines 73 and 74, add this.state 
        */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchedBooks.length > 0 ? (
                this.state.searchedBooks.map(book => (
                  <Book
                    key={book.id}
                    books={book}
                    book={book}
                    shelf={book.shelf}
                    updateShelf={this.props.updateShelf}
                    className="book-list-item"
                  />
                ))
              ) : this.state.invalidQuery ? (
                <h2>
                  {" "}
                  Sorry, we could not find your book! please enter a valid title
                  or author{" "}
                </h2>
              ) : (
                <h2> Let's find a book </h2>
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default ListBooks
