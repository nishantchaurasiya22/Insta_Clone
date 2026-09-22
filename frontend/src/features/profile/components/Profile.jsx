import{usePost} from "../../post/hooks/usePost"
import{useAuth} from "../../auth/hooks/useAuth"
import "../styles/profile.scss"
import { useEffect } from "react";
import UserPost from "../../post/components/UserPost";



const Profile = () => {
  const{user}=useAuth()
  const{handleGetPosts,posts}=usePost()
  const{user_name,profile_image,bio,email}=user

  useEffect(()=>{
    handleGetPosts()
  },[])
  return (
   <div className="profile">
      <div className="profile-card">

          <img src={profile_image} alt="" />
       
        <div className="profile-details">
          
          <div>
            <h2>{user_name}</h2>
          <h4>{bio?bio:""}</h4>
          <h4>{email}</h4>
          </div>
          <div className="follow-details">
            <h4>Follower:1000</h4>
            <h4>Following:200</h4>
          </div>
        </div>
      </div>
      <div className="posts">
       
       {posts.map(p=><UserPost key={p.id} post={p} />)}
      </div>
    </div>
  )
}

export default Profile