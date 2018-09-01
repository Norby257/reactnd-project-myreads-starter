import React from "react"

//  this takes props bc it is child component
function CurrentlyReading(props) {
  console.log("Props", props)
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <li key={book.id} className="book-list-item">
              <div className="book">
                <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                  }}
                />
                  <div className="book-shelf-changer">
                    <select>
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
                </div>
             
                <div className="book-title">{book.title}</div>
                <div className="book-authors"> {book.authors} </div>
                <span> {book.publishedDate} </span>
                <span> {book.shelf} </span>
              </div>
            </li>
          ))}
        </ol>
        
        </div>
      </div>
    </div>
  )
}

export default CurrentlyReading
