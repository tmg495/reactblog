import {useState} from 'react';
import styles from './BlogPostDetail.module.css';
import { Link } from 'react-router'
import DeleteButton from './DeleteButton';
import ConfirmationDialog from './ConfirmationDialog';
// import comments from './comments.js';
import CommentList from './CommentList.jsx'
import CommentForm from './CommentForm.jsx'

const BlogPostDetail = ({ title, content, author, date, id }) => {
    if (!title || !content || !author || !date) {
        return <p>Blog post not found.</p>;
    }

    const [comments, setComments] = useState([]);

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });

    const [dialogOpen, setDialogOpen] = useState(false)

    const handleDelete = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handleConfirm = () => {
        console.log('confirm delete')
    };

    const handleNewComment = (name, text) => {
        let newComments = [...comments, {
            key: comments.length+1,
            postID: id,
            name: name,
            date: Date.now(),
            text: text,
            avatar: '',
        }];
        setComments(newComments);
    }


    return (
        <div className={styles.blogPostDetail}>
            <div><Link to={`/post-form/${id}`} className={styles.edit}>Edit Post</Link></div>
            <ConfirmationDialog
                isOpen={dialogOpen}
                onClose={handleClose}
                onConfirm={handleConfirm}
            />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.author}><span className={styles.hidden}>By</span> {author}</p>
            <p className={styles.date}><span className={styles.hidden}>Published on</span> {formattedDate}</p>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: 
                content }} />
            <DeleteButton 
                onClick={handleDelete}
            />
            <h2>Comments</h2>
            <CommentList comments={comments} id={id}/>
            <CommentForm isLoggedIn={false} userName={'Bobert'} onSubmit={handleNewComment}/>
        </div>
    );
};
export default BlogPostDetail;