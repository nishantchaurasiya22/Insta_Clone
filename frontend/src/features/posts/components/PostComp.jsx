import { useContext } from "react"
import { PostsContext } from "../posts.context"
import PostCard from "./PostCard"
import "../styles/post.scss"
const PostComp = () => {
  const { feed, loading } = useContext(PostsContext)
  if (loading) {
    return (
      <h1>Loading..</h1>
    )
  }

  if (!feed || feed.length === 0) {
    return (<h1>No suggested posts</h1>)
  }
  return (
    <div className="post-section">
      {feed.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostComp