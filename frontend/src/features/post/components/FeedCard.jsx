import { CiHeart } from "react-icons/ci";
import "../styles/feed-card.scss"
import { useFollow } from "../../follow/hooks/useFollow"
import { useContext } from "react";
import { FollowContext } from "../../follow/follow.context";
const FeedCard = ({ feedCardDetail }) => {
    const { user_name, caption, profile_image, image_url, user_id } = feedCardDetail
      const context=useContext(FollowContext)
  const{SetSendRequest,SendRequest}=context
    const { handleSendFollowRequest, pending } = useFollow()
    const handleClick = () => {
        handleSendFollowRequest(user_id)
        SetSendRequest(true)
    }
    const isPending = pending.some(item => item.user_id == user_id)
    return (
        <div className="feed-card">
            <div className="feed-card-top">
                <div className="feed-info">
                    <img src={profile_image} alt="profile_image" />
                    <h2>{user_name}</h2>
                </div>

                <button className="follow-btn" onClick={handleClick}  disabled={isPending} >{isPending ? "requested" : "follow"}</button>

            </div>
            <img src={image_url} />
            <h4>{caption}</h4>
            <div className="likes">
                <CiHeart />
                <span>200</span>
            </div>
        </div>
    )
}

export default FeedCard