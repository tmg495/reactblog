import Comment from "./Comment"

function CommentList({comments, id}) {
    
    return (
        <ul className="commentList">
            {comments.map(comment=>
                <Comment
                    key={comment.key}
                    postID={comment.postID}
                    name={comment.name}
                    date={comment.date}
                    text={comment.text}
                    avatar={comment.avatar}
                    id={id}
                />
            )}
        </ul>
    )
}

export default CommentList