import { useAuth } from "../hooks/useAuth"
import "../styles/logout.scss"
import { IoExitOutline } from "react-icons/io5";
const Logout = () => {
    const{handleLogout}=useAuth()
    const handleClick=async()=>{
        await handleLogout()
    }
  return(
    <div className="logout-section" onClick={handleClick}>
      <h4>Logout</h4>
      <IoExitOutline />
    </div>
  )
}

export default Logout