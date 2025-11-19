import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import BlogPostDetail from './BlogPostDetail.jsx'
import { useParams } from 'react-router'
import posts from './posts.js'

const Dispatcher = function () {
    let params = useParams();
    let post = posts.find((post) => post.id==params.postid);
    return <BlogPostDetail {...post}/>
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App posts={posts}/>} />
      <Route 
        path="/blog-post/:postid" 
        element={<Dispatcher/>}
      />
    </Routes>
  </BrowserRouter>,
)
