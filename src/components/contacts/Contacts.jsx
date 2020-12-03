import React from 'react'

const Contacts = (props) => {
    return (
        <div>
            <h3>Vardas: {props.vardas}</h3>
            <p>El.Pastas: {props.email}</p>
        </div>
    )
}

export default Contacts
