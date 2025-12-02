import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import SunEditor from "suneditor-react";
import { Link, useNavigate } from 'react-router'
import "react-datepicker/dist/react-datepicker.css";
import "suneditor/dist/css/suneditor.min.css";
import styles from './BlogPostForm.module.css';

const BlogPostForm = ({ post, onSubmit }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [author, setAuthor] = useState(post?.author || '');
    const [date, setDate] = useState(post?.date || '');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const buttonText = post == undefined ? "Post" : "Update"

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!content) newErrors.content = 'Post must have a body';
        if (!author) newErrors.author = 'Author name required';
        if (!date) newErrors.date = 'Enter a date';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onSubmit( title, content, author, date );
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
                    id='date'
                    wrapperClassName={styles.datePicker}
                    popperPlacement='top-end'
                    popperClassName={styles.popper}
                    selected={date ? new Date(date) : null}
                    onChange={(d) => setDate(d.toISOString().split("T")[0])}
                />
                {errors.date && <p className={styles.error}>{errors.date}</p>}
            </div>

            <div className={styles.formGroup}>
                <SunEditor
                    id='editor'
                    wrapperClassName={styles.editor}
                    setContents={content}
                    onChange={setContent}
                />
                {errors.content && <p className={styles.error}>{errors.content}</p>}
            </div>

            <button type="submit" onClick={() => {
                if (errors.length == 0) {
                    navigate('/')
                }
            }
            }>{buttonText}</button>
        </form>
    );
};

export default BlogPostForm;