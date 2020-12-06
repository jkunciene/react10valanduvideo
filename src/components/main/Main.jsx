import React from 'react'
import BooksList from '../booksList/BooksList'
import Contacts from '../contacts/Contacts'

const Main = () => {
    return (
        <div>  
            <BooksList />
            <Contacts vardas='Jolita' email='jolita@gmail.com'/>
        </div>
    )
}

export default Main
