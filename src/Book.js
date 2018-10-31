import React from 'react';
import noImageAvail from './images/no_img_available.png'
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

      //  error handling for no cover / nor no author 
      const bookCover = this.props.books.imageLinks && this.props.books.imageLinks.smallThumbnail ? this.props.books.imageLinks.smallThumbnail : noImageAvail
      console.log(bookCover)
    


     const author = this.props.books.authors ? this.props.books.authors : 'No author available'
     console.log(author)
      return (
        <li className="book-list-item">
        <div className="book">
          <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
             backgroundImage:`url(${bookCover})`

              
            }}
          />

              <Select />

          </div>
       
          <div className="book-title">{this.props.books.title}</div>
          <div className="book-authors"> {this.props.books.authors ? this.props.books.authors.join(', ') :' '} </div>
          {/* <div className="book-authors"> {author ? author.join(', ') :' '} </div> */}

          <span> {this.props.books.publishedDate} </span>
          
        </div>
      </li>
    )

  }
  
    

}


export default Book;