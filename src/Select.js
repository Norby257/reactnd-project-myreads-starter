import React from "react"

class Select extends React.Component {
  moveBook = event =>
    // console.log(event.target.value, this.props.book, this.props.book.id, this.props.book.shelf);
    this.props.updateShelf(this.props.book, event.target.value)

  render() {
    // const { event } = this.state
    const { book, books, updateShelf } = this.props

    console.log(this.props)
    let currentShelf = "none"

    return (
      <div className="book-shelf-changer">
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
