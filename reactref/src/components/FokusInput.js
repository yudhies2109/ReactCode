import React, {useEffect, useRef} from 'react'

function FokusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
    // Focus to the input elemen
    inputRef.current.focus()
    }, [])
     
    return (
        <div>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default FokusInput
