import React from 'react';

//   TODO - pass slect as a prop to book on the shelf changer div 
// write a method and then pass that too as a prop 
import Select from './Select'
class Book extends React.Component {

//   updateShelf = (event) => {
//     this.setState({selectValue: event.target.value})
//     console.log(this.state)
// }
    //   TODO: update code so it checks to see if thumbnail exists and if not, return a default no image avail 
    //   TODO: user needs to be able to move a book between the shelves 
    render() {
      return (
        <li className="book-list-item">
        <div className="book">
          <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.books.imageLinks.smallThumbnail ? this.props.books.imageLinks.smallThumbnail : null})`
              
            }}
          />

              <Select />

          </div>
       
          <div className="book-title">{this.props.books.title}</div>
          <div className="book-authors"> {this.props.books.authors ? this.props.books.authors.join(', ') :' '} </div>
          <span> {this.props.books.publishedDate} </span>
          
        </div>
      </li>
    )

  }
  
    

}


export default Book;