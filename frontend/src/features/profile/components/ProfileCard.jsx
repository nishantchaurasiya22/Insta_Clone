import { CiHeart } from "react-icons/ci";
import "../styles/profile-card.scss"
const ProfileCard = ({ profile }) => {
    const { user_name, caption, profile_image, image_url } = profile
    return (
        <div className='profile-card'>
            <div className="profile-card-top">
                <div className="profile-info">
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

export default ProfileCard