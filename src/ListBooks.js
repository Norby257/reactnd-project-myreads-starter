import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { strictEqual } from 'assert';
import {Link} from 'react-router-dom'
import Select from './Select';
//  TODO: code this so that UI updates based on what is in the input field


//  TODO: pass state as a value 
//  TODO: have a fn that handles on change 

// TODO: pass this fn down so it filters list based on 
//   what ever we type in the input field

// TODO: proptypes - only string allowed to be entered 

//  TODO: save book info in a separate file 


//  TODO: refactor into class Component 
class ListBooks extends React.Component {
 
//  TODO: add state to the component 
state = {
  query: ''
}

  //  TODO: code this so that UI updates based on what is in the input field

  // TODO:  methods to update the query 
  
 updateQuery = (query) => {
   this.setState(() => ({
     query: query.trim()

   }))
 }

 // //  TODO: Reset the input field 

 // by using composition - clearQuery calls UpdateQuery
 // and the UpdateQuery calls this.setState
 clearQuery = () => {
   this.updateQuery('')
 }

 render() {
   // why is this undefined
   const {query} = this.state
   const {books} = this.props

   console.log(this.state);
   console.log(this.props);
   console.log({books});
   console.log(books);

   

    //  TODO: code this so that UI updates based on what is in the input field
    //  .filter is not a method; it's bc the previous thing is undefined 
   const showingBooks = query === ''

   ? books 
   : books.filter((b) => (
 b.title.toLowerCase().includes(query.toLowerCase())
    
  ))

  
   return (
    <div>
      {/* <a
            className="close-search"
          >
            Close
          </a> */}
          <Link to="/"
            className="close-search"
          >
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
        */}
        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>

      </div>
    </div>
    <div className="search-books-results">

      <ol className="books-grid">    
      
      </ol>
    </div>
  </div>
  <div className="list-books">
  <ol className="books-grid">
          {showingBooks.map(book => (
            <li key={book.id} className="book-list-item">
              <div className="book">
                <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                  }}
                />
                  <div className="book-shelf-changer">
                  <Select/>
                  </div>
                </div>
             
                <div className="book-title">{book.title}</div>
                <div className="book-authors"> {book.authors} </div>
                <span> {book.publishedDate} </span>
                <span> {book.shelf} </span>
              </div>
            </li>
          ))}
        </ol>

</div>

</div>

   )
 }

}




export default ListBooks;