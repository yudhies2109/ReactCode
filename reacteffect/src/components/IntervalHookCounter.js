import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)
    const [someProp, setSomeProp] = useState(1)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }


    useEffect(() => {

        function doSomething(someProp){
            console.log(someProp)
        }
        doSomething(someProp)
        const interval = setInterval(tick, 1000)

        console.log(interval, "Interval Value")

        return () =>{
            clearInterval(interval)
        }
    }, [someProp])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
