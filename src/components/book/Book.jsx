import React from 'react';
import Sell from '../sell/Sell';
import './book.css';


export default function Book() {
    return (
        <div className='oneBook'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
            <Sell/>
        </div>
    )
}

const Image = () => <img src="https://thumb.knygos-static.lt/oQDegotQlH146nsHsWJyDtmkiV0=/fit-in/320x430/filters:cwatermark(static/wm.png,500,75,30)/images/books/1453575/1584446844_D%C5%BEyru_d%C5%BEyru_72_dpi.jpg" alt=""/>
const Author = () => <h2>Tolstojus</h2>;
const Title = () => <h3>naujas visiskai</h3>;
const Price = () => <p>tik 15 $</p>;