import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import BlogPostDetail from './BlogPostDetail.jsx'
import { useParams } from 'react-router'
import posts from './posts.js'
import BlogPostForm from './BlogPostForm.jsx'
import Layout from './Layout.jsx'

const Dispatcher = function () {
    let params = useParams();
    let post = posts.find((post) => post.id==params.postid);
    return <BlogPostDetail {...post}/>
}

const PostEditor = function () {
    let params = useParams();
    let post = posts.find((post) => post.id==params.postid);
    return <BlogPostForm {...{post, onSubmit}}/>
}

const onSubmit = function ({ title, content, author, date }) {
    let id = title.replaceAll(' ', '').toLowerCase();
    
    console.log(id)
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App posts={posts}/>} />
        <Route 
          path="/blog-post/:postid" 
          element={<Dispatcher/>}
        />
        <Route 
          path='/post-form/:postid' 
          element={<PostEditor />}
        />
      </Routes>
    </Layout>
  </BrowserRouter>,
)
