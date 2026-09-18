import "../styles/postCard.scss"
import { CiHeart } from "react-icons/ci";

const PostCard = ({ post }) => {
  const { profile_image, user_name, image_url, caption } = post

  return (
    <div className="post-card">
      <div className="top-part">
        <div className="user-detail">
          <img src={profile_image} alt="profile-image" />
          <h4>{user_name}</h4>
        </div>

        <button className="follow-btn">follow</button>
      </div>
      <div className="post">
        <img src={image_url} alt="post-image" />
        <span>{caption}</span>
      </div>
      <div className="like-section">
        <CiHeart />
      </div>

    </div>
  )
}

export default PostCard