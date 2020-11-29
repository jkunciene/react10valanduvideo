import React from 'react';
import Book from '../book/Book';
import './booksList.css';


function BooksList() {
    return (
        <div className='booksList'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}

export default BooksList
