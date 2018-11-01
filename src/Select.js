import React from "react"

class Select extends React.Component {
  // TODO: state here
  state = {
    shelf: "none"
  }

  //  TODO: functions here - ok so this had the right idea, just re-naming it

  updateShelf = (event) => {
      this.setState({shelf: event.target.value})
      console.log(this.state)
  }

  //  get book by book id
  //  push that book to array

  //   destructure props 
  render() {
    // const { event } = this.state
    // const{ book, books} = this.props

    return (
      <div
        className="book-shelf-changer"
        onChange={event => this.updateShelf(event.target.value)}
      >
        {/* <select  onChange={this.handleChange} defaultValue={this.state}> */}
        <select onChange={this.props.handleOnChange}>

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
