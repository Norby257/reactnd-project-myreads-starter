import React from 'react';
import Book from './Book';



class Shelf extends React.Component {
    render() {
        const {book, books, updateShelf} = this.props
     

    
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
        {
            this.props.books.map(function(book){
                return <Book books={book} key = {book.id } shelf={book.shelf }updateShelf={updateShelf} book={book} />
            })
         }
        
            </ol>
            </div>
            </div>

        )
    }
}

export default Shelf;