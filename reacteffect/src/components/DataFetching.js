import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setFromButtonClick] = useState(1)

    // console.log(post)

    const handleClick = () => {
        setFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then( res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])


    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}> Fetch Post</button>
            <div> { posts.title}</div>
            {/* <ul>
                {
                    posts.map(posts =>(
                    <li key={posts.id}>{posts.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
