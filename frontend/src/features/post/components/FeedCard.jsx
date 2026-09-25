import { CiHeart } from "react-icons/ci";
import "../styles/feed-card.scss"
import useFollow from "../../follow/hooks/useFollow";

const FeedCard = ({  feedCardDetail}) => {
    const { user_name, caption, profile_image, image_url, user_id } = feedCardDetail
    const{handleSendFollowRequest,request}=useFollow()
    const isRequested=request?.includes(user_id)

    const handleFollow=()=>{
        if(isRequested) return;
        
        handleSendFollowRequest(user_id)
    }

    return (
        <div className="feed-card">
            <div className="feed-card-top">
                <div className="feed-info">
                    <img src={profile_image} alt="profile_image" />
                    <h2>{user_name}</h2>
                </div>

                <button className="follow-btn" onClick={handleFollow} disabled={isRequested} >{isRequested?"Requested":"Follow"} </button>

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