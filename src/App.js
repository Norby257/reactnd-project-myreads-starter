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

    books: []

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
//   I think i'm close to having this part complete, but I did not finish the moving Shelf functionality 
//  pseudocode for that:
//   update the shelf, using an OnChange listener 
//  using the BooksAPI.update method, 
//  get the ID of the book, check it does not already exist in the array
//   if it does not already exist, use this.setState to add it to the array 
//  we know which array we send it to, since we are using the OnChange on this.state.selectValue 

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

//  searching the books

  render() {
    console.log( "APP STATE",this.state);
    return (
      <div className="app">
      

       
         
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
