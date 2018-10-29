import React from 'react'; 

class Select extends React.Component {
    // TODO: state here 
    state = {
        shelf: 'none'
    }

    //  TODO: functions here - ok so this had the right idea, just re-naming it 

    // updateShelf = (event) => {
    //     this.setState({selectValue: event.target.value})
    //     console.log(this.state)
    // }
    
        //  get book by book id 
        //  push that book to array
        //  where state name is equal to the value selected?

        // BooksAPI.update()
        // .then((book)=>{

        // })
       

        //  push to array? not sure where exactly that is stored
        
       

       


    //  TODO render here 
    render() {
        const {event} = this.state
       
        return (
            <div className="book-shelf-changer" onChange={(event) => this.updateShelf(event.target.value)}>
            
            <select value={this.state.selectValue} onChange ={this.handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
          </div>

        )
    }


}

export default Select 