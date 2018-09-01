import React from 'react'; 

//  this takes props bc it is child component 
function CurrentlyReading(props) {
  console.log('Props', props);
    return (
        <div>
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                 <ol className='book-list'>
                 {props.books.map((book)=> (
                   <li key ={book.id} className='book-list-item'>
                   <div className='book'>
                   <div className='book-top'>
                   <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                   <div className='book-title'>{book.title}</div>
                  <div className='book-authors'> {book.authors} </div>
                  </div>
                  <div className='book-cover' style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
                   </div>
                  <span> {book.publishedDate} </span>
                  <span> {book.shelf} </span>
                
                          </div>

                 
                  
                
                   
        
                  </li>
                  
                 ))}
                 </ol>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {props.books.map((book)=>(
                      <li key ={book.id} className='book-list-item'>
                      </li>
                    ))}
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">  </div>
                          <div className="book-authors">Autho prop goes here </div>
                          <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                        </div>
                      </li>
                      
                    </ol>
                  </div>
                </div>

        </div>


    )

}


export default CurrentlyReading;