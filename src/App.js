import React from "react"
import "./App.css"
import {Route, Link} from 'react-router-dom';
import CurrentlyReading from "./CurrentlyReading"
import WantToRead from "./WantToRead"
import Read from "./Read"
import ListBooks from "./ListBooks"
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {

    books: [],
    currentlyReading: [],
    wantToRead: [],
    Read: [],
  }


  

//  get all books 
  componentDidMount() {
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })

  }

//  move book to a different shelf 

updateShelf = (book, shelf) => {
  //  use BooksAPI update method 
  BooksAPI.update(book, shelf)
  .then((book)=>{
    // set new state - concat the book to the array 
    this.setState((currentState)=>({
      books: currentState.books.concat([book])
      
    }))
    
  })
}

  render() {
    console.log( "APP STATE",this.state);
    return (
      <div className="app">
      
        {this.state.showSearchPage ? (
          <a
            className="close-search"
          >
            Close
          </a>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <div>
                <Route exact path='/currentlyReading' render={()=>(
                                  <CurrentlyReading books = {this.state.books} updateShelf={this.updateShelf}  />
                )} />
                <Route exact path='/wanttoread' render={()=> (
                                  <WantToRead books = {this.state.books} updateShelf={this.updateShelf} />
                )} />
                <Route exact path='/read' render={()=>(
                                  <Read books = {this.state.books} updateShelf={this.updateShelf} />
                                  

                )} />
              <Route exact path='/search' books={this.state.books} render={() => (
                <ListBooks books={this.state.books} />
              )}
              />
              
              <Route exact path = '/' render={()=>(
                <div>
                <CurrentlyReading books = {this.state.books} updateShelf={this.updateShelf} />
                <WantToRead books = {this.state.books} updateShelf={this.updateShelf} />
                <Read books = {this.state.books} updateShelf={this.updateShelf} />
                </div>
 
              )} />
              </div>
            </div>
            <div className="open-search">
            
              <Link
              to= '/search'>
                Add a book
                
                </Link>
              
              
            </div>
            
          </div>
        )}
       
      </div>
    )
  }
}

export default BooksApp
