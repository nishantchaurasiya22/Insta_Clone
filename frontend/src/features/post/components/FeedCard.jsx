import { CiHeart } from "react-icons/ci";
import "../styles/feed-card.scss"
const FeedCard = ({feedCardDetail}) => {
    const { user_name, caption, profile_image, image_url } = feedCardDetail
    return (
        <div className="feed-card">
            <div className="feed-card-top">
                <div className="feed-info">
                    <img src={profile_image} alt="profile_image" />
                    <h2>{user_name}</h2>
                </div>
                <div className="follow-btn">
                    <button>Follow</button>
                </div>
            </div>
            <img src={image_url} />
            <h4>{caption}</h4>
            <span>
                <CiHeart />
            </span>
        </div>
    )
}

export default FeedCard