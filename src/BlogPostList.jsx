import BlogPostItem from "./BlogPostItem"

function BlogPostList({displayedPosts, query}){
    if (displayedPosts.length == 0) {
        if (query != '') {
            return <p className="error">No results found for {query}</p>
        }
        return <p className="error">No blog posts available</p>
    }
    
    return (
        <ul className="postList">
            {displayedPosts.map(post=>
                <BlogPostItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    summary={post.summary}
                    content={post.content}
                    date={post.date}
                    url={post.url}
                    query={query}
                />
            )}
        </ul>
    );
}

export default BlogPostList