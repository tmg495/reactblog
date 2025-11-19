import React, { useState, useEffect } from 'react';
import styles from './BlogPostForm.module.css';
import DatePicker from "react-datepicker";
import SunEditor from "suneditor-react";
import "react-datepicker/dist/react-datepicker.css";
import "suneditor/dist/css/suneditor.min.css";

const BlogPostForm = ({ post, onSubmit }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [author, setAuthor] = useState(post?.author || '');
    const [date, setDate] = useState(post?.date || '');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!title) newErrors.title = 'Required';
        if (!content) newErrors.content = 'Required';
        if (!author) newErrors.author = 'Required';
        if (!date) newErrors.date = 'Required';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            } else {
                onSubmit({ title, content, author, date });
            }
        };

    return (
        <form className={styles.blogPostForm} onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
        <label htmlFor="title">Title: </label>
        <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
        </div>

        <div className={styles.formGroup}>
        <label htmlFor="author">Author: </label>
        <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <p className={styles.error}>{errors.author}</p>}
        </div>

        <div className={styles.formGroup}>
        <label htmlFor="date">Date: </label>
        <DatePicker
            selected={date ? new Date(date) : null}
            onChange={(d) => setDate(d.toISOString().split("T")[0])}
        />
        {errors.date && <p className={styles.error}>{errors.date}</p>}
        </div>

        <div className={styles.formGroup}>
        <SunEditor setContents={content} onChange={setContent} />
        {errors.content && <p className={styles.error}>{errors.content}</p>}
        </div>

        <button type="submit">Submit</button>
        </form>
    );
};

export default BlogPostForm;