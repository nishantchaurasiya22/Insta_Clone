import "../styles/user-post.scss"
import { CiHeart } from "react-icons/ci";
const UserPost = ({post}) => {  
  const{image_url,caption}=post
  return (
    <div className="post">
      <div>
        <img src={image_url} alt="post-image" />
      <h4>{caption}</h4>
      </div>
      <div className="likes">
        <CiHeart/>
        <span>200</span>
      </div>
    </div>
  )
}

export default UserPost