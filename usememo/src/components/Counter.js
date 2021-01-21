import React, {useState, useMemo}from 'react'

function counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEvent = useMemo(() => {
        let i = 0;
        while( i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}> Increment One - {counterOne}</button>
                <span>{isEvent ? 'Even' : 'Odd' }</span>
            </div>
            <div>
                <button onClick={incrementTwo}> Increment One - {counterTwo}</button>
            </div>
        </div>
    )
}

export default counter