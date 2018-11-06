import React from "react"
import "./App.css"
import { Route,  Link } from "react-router-dom"
import ListBooks from "./ListBooks"
import * as BooksAPI from "./BooksAPI"
import Shelf from "./Shelf"

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }))
    })
  }

  //  TODO update shelf of book

    //   call booksAPI.update ; params are the book id and the shelf 
    // updateBooks() {
    //   BooksAPI.update(book, shelf)
    //   .then(book,shelf => {


    //   })
    // }
       // update set state 

             //   filter out applicable book 
       
    //  add the applicable book

 
  render() {
    const currentlyReading = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    )
    const wantToRead = this.state.books.filter(
      book => book.shelf === "wantToRead"
    )
    console.log(currentlyReading)
    console.log(wantToRead)
    const read = this.state.books.filter(book => book.shelf === "read")
    console.log("read", read)
    return (
      <div className="app">
      <Route exact path='/search' exact component = {ListBooks} books={this.state.books} />
      <Route exact path = '/' render={()=> (
           <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
             <div>
               <Shelf
                 books={currentlyReading}
                 updateShelf={this.updateShelf}
                 title="Currently Reading"
               />
     
               <Shelf
                 books={wantToRead}
                 updateShelf={this.updateShelf}
                 title="Want to Read"
               />
     
               <Shelf books={read} updateShelf={this.updateShelf} title="Read" />
             </div>
           </div>
           <div className="open-search">
             <Link to="/search">Add a book</Link>
           </div>
         </div>

      )} />      
      
      </div>      


    )
}
}

export default BooksApp
