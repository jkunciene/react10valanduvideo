import React, { Component } from 'react'
import BooksList from '../booksList/BooksList'
import Contacts from '../contacts/Contacts'
import data from '../../data/data'
import Article from '../article/Article'
import ToDo from '../to-do-list/ToDo'
import VideoState from '../videostate/VideoState'

import './main.css'
import VideoEffect from '../videoeffect/VideoEffect'

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
            <div className='center'>  
                    <h3>To learn hooks</h3>
                    <VideoState/>
                    <VideoEffect/>
                    <ToDo/>
                    <BooksList />  
                    <div className='list-group'>
                        {themes} 
                    </div>                            
                    <Contacts vardas='Jolita' email='jolita@gmail.com' initialAge={17} />

            </div>
    )
    }
} 