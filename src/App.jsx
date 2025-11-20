import { useState } from 'react'
import './App.css'
import BlogPostList from './BlogPostList.jsx'
import { Link } from 'react-router'

function App({posts}) {
    return (
        <main>
            <h1>Hello World</h1>
            <Link to='/post-form/new'>Add Post</Link>
            <BlogPostList posts={posts}></BlogPostList>
        </main>
    )
}

export default App
