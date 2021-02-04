import React, {useState} from 'react'
import useInput from '../hook/useInput'

function UserForm() {

    const [bindFirstName, firstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    console.log(firstName, 'Ini first name saya')
    console.log(bindFirstName, 'Ini first name')
    console.log(resetFirstName, 'Ini first name reset')

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label> First Name </label>
                    <input
                        {...bindFirstName}
                        type='text'
                    />
                </div>
                <div>
                    <label> Last Name </label>
                    <input
                        {...bindLastName}
                        type='text'
                    />
                </div>
                <button> submit </button>
            </form>
        </div>
    )
}

export default UserForm
