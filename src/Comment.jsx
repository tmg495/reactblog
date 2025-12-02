import styles from './Comment.module.css';

function Comment(comment) {
    if (comment.id != comment.postID) {
        return null;
    }
    const formattedDate = new Date(comment.date).toLocaleString('en-US');

    function isValidURL(url) {
        // dummy code because there is no backend
        return false;
    }
    let avatarString = ''
    if (!isValidURL(comment.avatar)) {
        avatarString = 'https://media.istockphoto.com/id/870832662/vector/mans-silhouette-glyph-icon.jpg?s=612x612&w=0&k=20&c=EF2vbKRj5msrDKGuZJrEZpEwaYjf3cQallPKfZ4_iBk=';
    }
    return <li className={styles.comment}>
        <img src={avatarString} className={styles.avatar}></img>
        <p className={styles.name}>
            {comment.name}
        </p>
        <p className={styles.date}>
            {formattedDate}
        </p>
        <p className={styles.text}>
            {comment.text}
        </p>
    </li>
}

export default Comment