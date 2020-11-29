import React from 'react';
import './book.css';


function Book() {
    return (
        <div className='oneBook'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
        </div>
    )
}

const Image = () => <img src="https://thumb.knygos-static.lt/oQDegotQlH146nsHsWJyDtmkiV0=/fit-in/320x430/filters:cwatermark(static/wm.png,500,75,30)/images/books/1453575/1584446844_D%C5%BEyru_d%C5%BEyru_72_dpi.jpg" alt=""/>
const Author = () => <h2>Autorius knygos</h2>;
const Title = () => <h3>Knygos pavadinimas</h3>;
const Price = () => <p>tik 10 $</p>


export default Book
