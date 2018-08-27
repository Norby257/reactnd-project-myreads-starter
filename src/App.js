import React from "react"
// import * as BooksAPI from './BooksAPI'
import "./App.css"
import {Route, Link} from 'react-router-dom';
import CurrentlyReading from "./CurrentlyReading"
import WantToRead from "./WantToRead"
import Read from "./Read"
import ListBooks from "./ListBooks"

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
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <a
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
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
                <CurrentlyReading />
                <WantToRead />
                <Read />
              <Route exact path='/search' render={() => (
                <ListBooks />
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
