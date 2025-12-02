import styles from './Comment.module.css';
import {useState} from 'react';

const CommentForm = ({isLoggedIn, userName, onSubmit}) => {
    const [name, setName] = useState(isLoggedIn ? userName : '');
    const [text, setText] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!name) newErrors.name = 'Comment must have a username';
        if (!text) newErrors.text = 'Comment must have a body';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onSubmit(name, text);
        }
    };

    return (
        <form className={styles.commentForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor='name'>Name: </label>
                <input
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly={isLoggedIn}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor='text'>Comment: </label>
                <input
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {errors.text && <p className={styles.error}>{errors.text}</p>}
            </div>
            <button className={styles.commentButton} type="submit">Add Comment</button>
        </form>
    )
}

export default CommentForm;