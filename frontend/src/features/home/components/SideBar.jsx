import { NavLink } from "react-router"
import "../styles/side-bar.scss"
import { CiCirclePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="side-bar">
      <NavLink
        to="/home"
        end
        className={({ isActive }) => isActive ? "active" : ""}
      >
        <div><span><FaHome /></span><span>Home</span></div>
      </NavLink>
      <NavLink
        to="/home/profile"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        <div><span><CgProfile /></span><span>Profile</span></div>
      </NavLink>
      <NavLink to="/home/create_post" className={({ isActive }) => isActive ? "active" : ""} >
        <div><span><CiCirclePlus /></span><span>create post</span></div>
      </NavLink>
    </div>
  )
}

export default SideBar