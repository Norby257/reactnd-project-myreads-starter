import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { strictEqual } from 'assert';
import {Link} from 'react-router-dom'
import Book from './Book';

class ListBooks extends React.Component {
 

state = {
  query: ''

 
}

  //  TODO: books need to be from the search API 
  //   not just limited to what can be found on the shelf 

  //  query all of the books 
 updateQuery = (query) => {
   this.setState(() => ({
     query: query

   }))
 }


//  clearQuery = () => {
//    this.updateQuery(' ')
//  }

 render() {
  //  destructure state and props
   const {query} = this.state
   const {books} = this.props

console.log(books);
console.log(query);

//  filter contacts based on the input field 
   const showingBooks = query === ''

   ? books 
   : books.filter((b) => (
 b.title.toLowerCase().includes(query.toLowerCase())
    
  ))

  
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

      <ol className="books-grid">  
        
      
      </ol>
    </div>
  </div>
  <div className="list-books">
  <ol className="books-grid">
  {
        showingBooks.map(function(book){
          return <Book key={book.id} />
        }) 
         
          }
        </ol>

</div>


</div>

   )
 }

}




export default ListBooks;