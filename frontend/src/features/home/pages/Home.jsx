import { useAuth } from "../../auth/hooks/useAuth"
import PostComp from "../../posts/components/PostComp"
import HeaderComp from "../components/HeaderComp"
import "../styles/home.scss"


const Home = () => {
  const { user } = useAuth()
  return (
    <main className="home-section">
      <HeaderComp />
      <div className="content-section">
        <PostComp/>
      </div>
  
    </main>
  )
}

export default Home