import React from 'react';
//   TODO - pass slect as a prop to book on the shelf changer div 
// write a method and then pass that too as a prop 
import Select from './Select'
function Book(props) {

//   updateShelf = (event) => {
//     this.setState({selectValue: event.target.value})
//     console.log(this.state)
// }
    //   TODO: update code so it checks to see if thumbnail exists and if not, return a default no image avail 
    //   TODO: user needs to be able to move a book between the shelves 
        return (
            <li className="book-list-item">
            <div className="book">
              <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${props.books.imageLinks.smallThumbnail ? props.books.imageLinks.smallThumbnail : null})`
                  
                }}
              />
                <div className="book-shelf-changer" onChange={(event) => this.updateShelf(event.target.value)}>
                <Select />

                </div>
              </div>
           
              <div className="book-title">{props.books.title}</div>
              <div className="book-authors"> {props.books.authors ? props.books.authors.join(', ') :' '} </div>
              <span> {props.books.publishedDate} </span>
              
            </div>
          </li>
        )
    

}


export default Book;