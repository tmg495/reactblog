import React from "react"
import { Link } from 'react-router'

function BlogPostItem(post) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });

    let title = post.title;
    let summary = post.summary;

    if (post.query.length > 0) {
        if (post.title.toLowerCase().includes(post.query)) {
            title = title.toLowerCase().replace(post.query, `<mark>${post.query}</mark>`)
        }
        if (post.content.toLowerCase().includes(post.query)) {
            let queryIndex = post.content.toLowerCase().indexOf(post.query)
            summary = '...' + post.content.slice(queryIndex, queryIndex + post.query.length + 20) + '...'
            summary = summary.toLowerCase().replace(post.query, `<mark>${post.query}</mark>`)
        }
    }

    return <li className="post">
        <h2 className='heading hidden'>
            <Link to={`/blog-post/${post.id}`} dangerouslySetInnerHTML={{__html: title}}></Link>
        </h2>
        <p className='summary' dangerouslySetInnerHTML={{__html: summary}}></p>
        <p className='date'>Published on {formattedDate}</p>
    </li>
}

export default BlogPostItem