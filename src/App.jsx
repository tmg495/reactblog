import { useState } from 'react'
import './App.css'
import BlogPostList from './BlogPostList.jsx'


const posts = [{key: 'post1', id: 'post1', title: 'Moon Landing', summary: 'Two astronauts walked on the moon, and it was dope.', date: '1969-07-20', url: 'url1'},
  {key: 'post2', id: 'post2', title: 'This extremely long title is meant to test how much these titles need to be cropped for mobile.', summary: 'summary2', date: 'date2', url: 'url2'},
  {key: 'post3', id: 'post3', title: 'title3', summary: 'summary3', date: 'date3', url: 'url3'}
]

function App() {
    return (
        <main>
            <h1>Hello World</h1>
            <BlogPostList posts={posts}></BlogPostList>
        </main>
    )
}

export default App
