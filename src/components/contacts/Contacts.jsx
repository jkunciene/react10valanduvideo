import React from 'react'

const Contacts = (props) => {
    return (
        <div>
            <h3>Vardas: {props.name}</h3>
            <p>El.Pastas: {props.email}</p>
        </div>
    )
}

export default Contacts
