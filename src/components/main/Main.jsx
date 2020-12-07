import React, { Component } from 'react'
import BooksList from '../booksList/BooksList'
import Contacts from '../contacts/Contacts'
import data from '../../data/data'
import Article from '../article/Article'
import ToDo from '../to-do-list/ToDo'

export default class Main extends Component{
    constructor(){
        super();
    }
    render(){

        const themes=data.map(article =>
            <Article articles=
                {{
                    key:article.id,
                    title:article.title,
                    description:article.description
                }} />)

            return(
            <div>  
                    <BooksList />  
                    <div className='list-group'>
                        {themes} 
                    </div>                            
                    <Contacts vardas='Jolita' email='jolita@gmail.com' initialAge={17} />

                    <ToDo/>
            </div>
    )
    }
} 