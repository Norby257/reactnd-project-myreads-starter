import React from "react"

class Select extends React.Component {
  // TODO: state here
 constructor(props) {
   super(props);
   this.state = {value: 'none'};

  this.handleChange = this.handleChange.bind(this);
 }
//   handle change function here - handle what was selected 
 handleChange(event) {
   this.setState({value: event.target.value})
   console.log(this.state);
 }


  //   destructure props 
  render() {
    // const { event } = this.state
    // const{ book, books} = this.props

    return (
      <div
        className="book-shelf-changer"
        
      >
 
        <select defaultValue={this.state.value} onChange={this.handleOnChange}>

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
