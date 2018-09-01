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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
    //  TODO: instead of SET STATE - use ROUTE and then Link to should work with the button (to go back?)
    //  to '/' and then plus sign icon should route to '/search' 
    //  TODO: navigate back to home page with back button?

    books: [],
    currentlyReading: [],
    wantToRead: [],
    Read: []
  
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
  //  get the book that was clicked 
  //  then update it 
  // moveBook = (book) => {
  //   this.setState({selectOptionValue: book.target.value

  //   })
  // }

  //   so this is after setState 

  // BooksAPI.update(book);


  render() {
    console.log( "APP STATE",this.state.books[0]);
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
                                  <CurrentlyReading books = {this.state.books}  />
                )} />
                <Route exact path='/wanttoread' render={()=> (
                                  <WantToRead books = {this.state.books} />
                )} />
                <Route exact path='/read' render={()=>(
                                  <Read books = {this.state.books} />
                                  

                )} />
              <Route exact path='/search' books={this.state.books} render={() => (
                <ListBooks />
              )}
              />
              
              <Route exact path = '/' render={()=>(
                <div>
                <CurrentlyReading books = {this.state.books} />
                <WantToRead books = {this.state.books} />
                <Read books = {this.state.books} />
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
