import React from 'react';
import styles from './BlogPostDetail.module.css';
import { Link } from 'react-router'

const BlogPostDetail = ({ title, content, author, date, id }) => {
    if (!title || !content || !author || !date) {
        return <p>Blog post not found.</p>;
    }
    console.log(id)
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });
    return (
        <div className={styles.blogPostDetail}>
            <div><Link to={`/post-form/${id}`} className={styles.edit}>Edit Post</Link></div>
            <br></br>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.author}><span className={styles.hidden}>By</span> {author}</p>
            <p className={styles.date}><span className={styles.hidden}>Published on</span> {formattedDate}</p>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: 
                content }} />
            <Link to='/'>Home</Link>
        </div>
    );
};
export default BlogPostDetail;