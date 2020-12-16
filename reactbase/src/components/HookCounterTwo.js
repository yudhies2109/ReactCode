import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () =>{
        for (let i= 0; i < 5; i++) {
            setCount(prevValue => prevValue + 1)
            
        }
    }

    return (
        <div>
            count: { count }
            <br></br>
            <button onClick = {() => setCount(initialCount)}> Reset </button>
            <button onClick = {() => setCount(prevValue => prevValue + 1)}> Increment </button>
            <button onClick = {() => setCount(prevValue => prevValue - 1)}> Decrement </button>
            <button onClick={incrementFive}> Increment Five</button>
        </div>
    )
}

export default HookCounterTwo
