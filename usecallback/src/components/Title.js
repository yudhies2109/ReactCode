import React from 'react'

function Title() {

    console.log('Rendering title');

    return (
        <h2>
            USECALLBACK HOOK
        </h2>
    )
}

export default React.memo(Title)
