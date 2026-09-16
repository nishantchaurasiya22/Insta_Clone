import { useAuth } from "../../auth/hooks/useAuth"
import "../styles/header.scss"
import { FaPlus } from "react-icons/fa";
const HeaderComp = () => {
     const{user}=useAuth()
  return (   
    <header className="header-section">
        <div className="profile-icon">
            <img src={user?.profile_image}/>
            <h4>{user?.user_name}</h4>
        </div>
        <div className="add-post">
           <FaPlus />
        </div>
    </header>
  )
}

export default HeaderComp