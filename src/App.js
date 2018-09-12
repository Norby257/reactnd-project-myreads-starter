import React from "react"
import "./App.css"
import {Route, Link} from 'react-router-dom';
import ListBooks from "./ListBooks"
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
class BooksApp extends React.Component {
  state = {

    books: []

  }

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



  render() {
    return (
      <div className="app">
      

       
         
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <div>
               
                                  <Shelf books = {this.state.books} updateShelf={this.updateShelf} title="Currently Reading"  />
              
                
                                  <Shelf books = {this.state.books} updateShelf={this.updateShelf} title="Want to Read" />
              
                
                                  <Shelf books = {this.state.books} updateShelf={this.updateShelf} title="Read" />
                                  

              
              <Route exact path='/search' books={this.state.books} render={() => (
                <ListBooks books={this.state.books} />
              )}
              />
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
