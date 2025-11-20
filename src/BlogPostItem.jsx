import React from "react"
import { Link } from 'react-router'

function BlogPostItem(post) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });
    return <li className="post">
        <h2 className='heading hidden'>
            <Link to={`/blog-post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className='summary'>{post.summary}</p>
        <p className='date'>Published on {formattedDate}</p>
    </li>
}

export default BlogPostItem