import Logout from "../../auth/components/Logout"
import "../styles/header.scss"
import { useAuth } from "../../auth/hooks/useAuth"
const Header = () => {
  const { user } = useAuth()
  const { user_name, profile_image } = user


  return (
    <header>
      <div className="user-info">
        <img src={profile_image} alt="profile_image" />
        <h2>{user_name}</h2>
      </div>
    <Logout/>
    </header>
  )
}

export default Header