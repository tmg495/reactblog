import BlogPostItem from "./BlogPostItem"

function BlogPostList({posts}){
    if (posts.length == 0) {
        return <p className="error">No blog posts available</p>
    }
    
    return (
        <ul className="postList">
            {posts.map(post=>
                <BlogPostItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    summary={post.summary}
                    date={post.date}
                    url={post.url}
                />
            )}
        </ul>
    );
}

export default BlogPostList