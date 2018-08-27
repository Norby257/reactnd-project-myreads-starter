import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { strictEqual } from 'assert';

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
   const {query} = this.state


    //  TODO: code this so that UI updates based on what is in the input field
//    const showingBooks = query === ''
//    ? books 
//    : books.filter((b) => (
//  b.name.toLowerCase().includes(query.toLowerCase())
    
//   ))

  
   return (
    <div>
    <div className="search-books">
    {JSON.stringify(this.state)}
    <div className="search-books-bar">
    <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>

      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
  <div className="list-books">

</div>
</div>

   )
 }

}




export default ListBooks;