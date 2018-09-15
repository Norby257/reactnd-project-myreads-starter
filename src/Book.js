import React, {Component} from 'react';
import Select from './Select';

function Book(props) {
    
        return (
            <li className="book-list-item">
            <div className="book">
              <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${props.books.imageLinks.smallThumbnail})`
                }}
              />
                <div className="book-shelf-changer">
                <Select />

                </div>
              </div>
           
              <div className="book-title">{props.books.title}</div>
              <div className="book-authors"> {props.books.authors ? props.books.authors.join(', ') :' '} </div>
              <span> {props.books.publishedDate} </span>
              <span> {props.books.shelf} </span>
            </div>
          </li>
        )
    

}


export default Book;