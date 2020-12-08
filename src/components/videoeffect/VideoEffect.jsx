import React, {useState, useEffect} from 'react'

const VideoEffect = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    // nori dvieju reiksmiu
    //  funkcija viduje bus ivykdoma tik tada, kai nurodytas parametras, 
    //  jo reiksme tikrai pasikeis


    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])

    return (
        <div>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h3>{resourceType}</h3>
        {/* gautu duomenu is api spausdinimas */}
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </div>
    )
}

export default VideoEffect
