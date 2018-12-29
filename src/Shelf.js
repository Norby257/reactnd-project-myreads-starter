import React from 'react';
import Book from './Book';
// TODO: refactor this into a class component to destructure the props 


function Shelf(props) {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
        {
            props.books.map(function(book){
                return <Book books={book} key ={book.id } shelf={book.shelf} updateShelf={props.updateShelf} />
            })
         }
        
            </ol>
            </div>
            </div>


        )
    
}


export default Shelf;