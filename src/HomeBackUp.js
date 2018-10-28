// main home component that is only rendering content so it can be a stateless fn component 
import React from 'react' 
import Shelf from './Shelf'

 const Home = (books) => {
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
      <div className ="app" >
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
        
        </div>
        </div>
        )}

export default Home

// entire app file below this line 
import React from "react"
import "./App.css"
import { Route, BrowserRouter, Link } from "react-router-dom"
import ListBooks from "./ListBooks"
import * as BooksAPI from "./BooksAPI"
import Shelf from "./Shelf"
import Select from "./Select"
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
  //  TODO: refactor so that there is a main HOME component that is rendered here 
  //   so that I can use the route EXACT to show only the HOME or only the SEARCH 

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

   <Route exact path='/' render={()=>(
    <div className="app">
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
    )}
  
  </div>
   
   )} />
      
    )
  }
}

export default BooksApp
 