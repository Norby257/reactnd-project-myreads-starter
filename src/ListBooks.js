import React from 'react';

import {Link} from 'react-router-dom'
import Book from './Book';
import * as BooksAPI  from './BooksAPI.js'
//  API calls are working as expected, yay 
//   just need to map over them below when they are rendered 
class ListBooks extends React.Component {
 

state = {
  query: '', 
  searchedBooks: [],
  invalidQuery: false

 
}
// should updateQuery include this whole function? 
 updateQuery = (query) => {

   this.setState(() => ({
     query: query
   

   }))
   console.log(query)
  

   BooksAPI.search(query)
   .then((searchedBooks)=>{
     //  error handling, is result set greater than 0? 
    // careful on this so as to not introduce a bug of typeError 
    // check that query is not empty 
    // check that searchedBooks.length is greater than 0 
     if ( this.state.query !== '') {

     
     if (searchedBooks.length > 0) {
       

     
     this.setState(()=>({
       searchedBooks
     }))
     searchedBooks.map(function(searchedbook){
       return <Book books={searchedBooks}/>
     })
    }
  }

    else {
      this.setState(()=> ({
        searchedBooks: [],
        invalidQuery: true
      }))
    }
    console.log(searchedBooks)
    console.log(this.state)
    
   })
 }

// TODO: handle invalid search queries. i.e, queries that do not have a result 
//   if result === 0, handle error and show error message 

//  TODO: remove search results when all text is deleted out of the input field 

// TODO: add a way to link back to home screen 

// 


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
      
       <ol className="books-grid">  
       
       { this.state.searchedBooks.length > 0

       ?  this.state.searchedBooks.map((book)=>(
      <Book key={book.id} books={book} className='book-list-item' />
    
    )) : this.state.invalidQuery ? <h2> Sorry, we could not find your book! please enter a valid title or author </h2> : <h2> Let's find a book </h2>
  }
      
       </ol> 
    </div>
  </div>
</div>
   )
 }
}
export default ListBooks;