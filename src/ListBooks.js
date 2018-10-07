import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { strictEqual } from 'assert';
import {Link} from 'react-router-dom'
import Book from './Book';
import * as BooksAPI  from './BooksAPI.js'
class ListBooks extends React.Component {
 

state = {
  query: '', 
  searchedBooks: []

 
}

  //  TODO: books need to be from the search API 
  // TODO: FIX BUG so only the search bar and books from search result show 
  //   not just limited to what can be found on the shelf 
  //  use search API
  //   do not show what;s oon the shelf 
  //  display books returned from API call
  //   this means, map over the results and render them to the screen 
  //   ina a way that is probably similar to what you did on shelf or app component 


 

//   does the following 
//  calls .search API 
// probably needs to filter based on user input before displaying it 
//   and then render results from search page
 updateQuery = (query) => {
   this.setState(() => ({
     query: query

   }))
   //  
   BooksAPI.search(query)
   .then((searchedBooks)=>{
     this.setState(()=>({
       searchedBooks
     }))
     searchedBooks.map(function(searchedbook){
       return <Book books={searchedBooks}/>
     })
    console.log(searchedBooks)
    console.log(this.state)
    
   })
 }


//  clearQuery = () => {
//    this.updateQuery(' ')
//  }

 render() {
  //  destructure state and props
   const {query} = this.state

console.log(query);

//  filter books based on the input field 
//    const showingBooks = query === ''

//    ? this.state.searchedbooks 
//    : this.state.searchedbooks.filter((b) => (
//  b.title.toLowerCase().includes(query.toLowerCase())
    
//   ))

  
   return (
    <div>
   
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

      {/* <ol className="books-grid">  */}
    {/* {showingBooks.map((book)=>(
      <Book key={book.id} className='book-list-item' />
    
    ))} */}
      
      
      {/* </ol> */}
    </div>
  </div>
</div>

   )
 }

}




export default ListBooks;