import { useState } from 'react'
import './App.css'
import BlogPostList from './BlogPostList.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router'
import posts from './posts.js'
import BlogPostDetail from './BlogPostDetail.jsx'
import BlogPostForm from './BlogPostForm.jsx'
import Layout from './Layout.jsx'

const Dispatcher = function ({displayedPosts}) {
    let params = useParams();
    let post = displayedPosts.find((post) => post.id==params.postid);
    return <BlogPostDetail {...post}/>
}

const PostEditor = function ({onSubmit, displayedPosts}) {
    let params = useParams();
    let post = displayedPosts.find((post) => post.id==params.postid);
    return <BlogPostForm {...{post, onSubmit}}/>
}

function App() {
    const [displayedPosts, setDisplayedPosts] = useState(posts)

    const onSubmit = function ( title, content, author, date ) {
        let id = title.replaceAll(' ', '').toLowerCase();
    
        console.log(id)
    }

    const handleSearch = function (query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredPosts = posts.filter(post => {
            const lowerCaseTitle = post.title.toLowerCase();
            const lowerCaseText = post.content.toLowerCase();
            return lowerCaseTitle.includes(lowerCaseQuery) || lowerCaseText.includes(lowerCaseQuery)
        })
        setDisplayedPosts(filteredPosts);
    }
    return (
        <BrowserRouter>
            <Layout handleSearch={handleSearch}>
                <Routes>
                    <Route path="/" element={<BlogPostList displayedPosts={displayedPosts}></BlogPostList>} />
                    <Route 
                        path="/blog-post/:postid" 
                        element={<Dispatcher displayedPosts={displayedPosts}/>}
                    />
                    <Route 
                        path='/post-form/:postid' 
                        element={<PostEditor onSubmit={onSubmit} displayedPosts={displayedPosts}/>}
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
