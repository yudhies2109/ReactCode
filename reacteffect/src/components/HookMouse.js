import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMousePosition)
// Unmounting harus di dalam useeffect terkait dan di dalam return
        return () => {
            console.log(" Component Un mounthing");
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {X} Y - {Y}
        </div>
    )
}

export default HookMouse
