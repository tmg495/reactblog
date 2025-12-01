import { useState } from 'react'
import './App.css'
import BlogPostList from './BlogPostList.jsx'
import { Link } from 'react-router'

function App({posts}) {
    return (
        <>
            <BlogPostList posts={posts}></BlogPostList>
        </>
    )
}

export default App
