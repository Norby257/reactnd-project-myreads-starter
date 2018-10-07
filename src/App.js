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
        <Route path ='/search'  render={({history}) => (
                <ListBooks  />
              )}
              />
       
      </div>
    )
  }
}

export default BooksApp
