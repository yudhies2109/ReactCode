import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [loading, setLoading] = useState(true)
    const [eror, setError] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(Response => {
            setLoading(false)
            setpost(Response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setpost({})
            setError('Something WRONG!!')
        })
    }, [])

    return (
        <div>
            {loading ? 'loading' : post.title}
            {eror ? eror : null}
        </div>
    )
}

export default DataFetchingOne
