import { Outlet } from "react-router"
import Header from "../components/Header"
import "../styles/home.scss"
import SideBar from "../components/SideBar"
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content-section">
        <SideBar/>
        <div className="child">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home