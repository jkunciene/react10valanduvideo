import React, {useState} from 'react'

const VideoState = () => {
    const [count, setCount] = useState(4)

    const decrementCount = () => { 
        setCount(prevCount => prevCount - 1)
    }
    const incrementCount =() =>{
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div className='mb-5'>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default VideoState
