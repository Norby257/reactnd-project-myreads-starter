import React from "react"

class Select extends React.Component {
  // TODO: state here else it is null value 


// TODO: fix error: this.updateShelf is undefined. passed as a prop but value is undefined/
// TODO: get the id of the book ; make sure that the selected book is not undefined 
//   also, double check how it's referenceed in APP.js 

// ok so event.target.value works, it's book that is undefined 

moveBook  = event => 
// this.props.updateShelf(this.props.book, event.target.value);
// console.log(this.props);
// console.log(event.target.value, this.props.book, this.props.book.id, this.props.book.shelf);
this.props.updateShelf(this.props.book, event.target.value)



  //   destructure props 
  render() {
    // const { event } = this.state
    const{ book, books, updateShelf} = this.props
    console.log(this.props);
    let currentShelf = 'none';
  
    return (
      <div
        className="book-shelf-changer"
        
      >
 
        <select defaultValue={currentShelf} onChange={this.moveBook}>

          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Select
