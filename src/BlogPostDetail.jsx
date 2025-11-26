import {useState} from 'react';
import styles from './BlogPostDetail.module.css';
import { Link } from 'react-router'
import DeleteButton from './DeleteButton';
import ConfirmationDialog from './ConfirmationDialog';

const BlogPostDetail = ({ title, content, author, date, id }) => {
    if (!title || !content || !author || !date) {
        return <p>Blog post not found.</p>;
    }
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
            <br></br>
            <Link to='/'>Home</Link>
        </div>
    );
};
export default BlogPostDetail;