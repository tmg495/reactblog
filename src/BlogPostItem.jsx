import React from "react"
import { Link } from 'react-router'

const MONTHS = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December']

function BlogPostItem(post) {
    const year = post.date.slice(0,4)
    const month = post.date.slice(5,7)
    const day = post.date.slice(8)
    const url = `/posts/${post.id}`
    return <li className="post">
        <h2 className='heading hidden'>
            <Link to={url}>{post.title}</Link>
        </h2>
        <p className='summary'>{post.summary}</p>
        <p className='date'>Published on {MONTHS[parseInt(month)]} {day}, {year}</p>
    </li>
}

export default BlogPostItem