import React, {Component} from 'react';
import Book from './Book';
function Shelf(props) {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
        {
            props.books.map(function(book){
                return <Book books={book} key ={book.id} />
            })
         }
        
            </ol>
            </div>
            </div>


        )
    
}


export default Shelf;