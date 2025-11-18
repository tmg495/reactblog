import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Post1 from "./posts/post1.jsx"
import Post2 from "./posts/post2.jsx"
import Post3 from "./posts/post3.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/posts/post1" element={<Post1 />}/>
      <Route path="/posts/post2" element={<Post2 />}/>
      <Route path="/posts/post3" element={<Post3 />}/>
    </Routes>
  </BrowserRouter>,
)
