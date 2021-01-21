import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalref = useRef();

    useEffect(() => {
        intervalref.current = setInterval(() => {
            setTimer( prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalref.current)
        }
    }, [])


    return (
        <div>
            HOOK TIMER - {timer}
            <button onClick={() => { clearInterval(intervalref.current)}}> Clear Timer Hook </button>
        </div>
    )
}

export default HookTimer
