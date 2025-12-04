import { useState } from 'react'
import './App.css'
import BlogPostList from './BlogPostList.jsx'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router'
import posts from './posts.js'
import BlogPostDetail from './BlogPostDetail.jsx'
import BlogPostForm from './BlogPostForm.jsx'
import Layout from './Layout.jsx'

const Dispatcher = function ({savedPosts, handleConfirm}) {
    let params = useParams();
    let post = savedPosts.find((post) => post.id==params.postid);
    return <BlogPostDetail {...post} handleConfirm={handleConfirm}/>
}

const PostEditor = function ({onSubmit, savedPosts}) {
    let params = useParams();
    let post = savedPosts.find((post) => post.id==params.postid);
    return <BlogPostForm {...{post, onSubmit}}/>
}

function App() {
    const [savedPosts, setSavedPosts] = useState(posts)
    const [displayedPosts, setDisplayedPosts] = useState(savedPosts)
    const [query, setQuery] = useState('')
    const navigate = useNavigate();

    const onSubmit = function ( title, content, author, date ) {
        let id = title.replaceAll(' ', '').toLowerCase();
        
        let newPosts = savedPosts.filter((post) => post.id != id)
        newPosts = [...newPosts, {
            id: id,
            title: title,
            content: content,
            author: author,
            date: date,
        }]
        setSavedPosts(newPosts);
        setDisplayedPosts(newPosts);
    }

    const handleSearch = function (query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredPosts = savedPosts.filter(post => {
            const lowerCaseTitle = post.title.toLowerCase();
            const lowerCaseText = post.content.toLowerCase();
            return lowerCaseTitle.includes(lowerCaseQuery) || lowerCaseText.includes(lowerCaseQuery)
        })
        setDisplayedPosts(filteredPosts);
    }

    
    const handleConfirm = function (id) {
        let newPosts = savedPosts.filter((post) => post.id != id)
        setSavedPosts(newPosts);
        setDisplayedPosts(newPosts);
        navigate('/');
    }

    return (
        <Layout handleSearch={handleSearch} query={query} setQuery={setQuery}>
            <Routes>
                <Route path="/" element={<BlogPostList displayedPosts={displayedPosts} query={query}></BlogPostList>} />
                <Route 
                    path="/blog-post/:postid" 
                    element={<Dispatcher savedPosts={savedPosts} handleConfirm={handleConfirm}/>}
                />
                <Route 
                    path='/post-form/:postid' 
                    element={<PostEditor onSubmit={onSubmit} savedPosts={savedPosts}/>}
                />
            </Routes>
        </Layout>
    )
}

export default App
