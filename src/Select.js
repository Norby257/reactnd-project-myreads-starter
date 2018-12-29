import React from "react"

class Select extends React.Component {
  // TODO: state here
 constructor(props) {
   super(props);
 
 }

//   TODO: fix this - i am selecting state here but I think i need to call the props instead 

// updateShelf = event => 
// this.props.updateShelf(this.props.book, event.target.value);


// TODO: fix error: this.updateShelf is undefined. passed as a prop but value is undefined/
//   also props.book is undefined and with arrow function can only have inline return thats why I have errors, it looks like 
moveBook  = event => 
// this.props.updateShelf(this.props.book, event.target.value);
// console.log(this.props);
console.log(this.props.book);



  //   destructure props 
  render() {
    // const { event } = this.state
    const{ book, books} = this.props
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
