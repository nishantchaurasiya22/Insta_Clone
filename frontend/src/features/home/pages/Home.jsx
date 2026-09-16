import { useAuth } from "../../auth/hooks/useAuth"
import HeaderComp from "../components/HeaderComp"
import "../styles/home.scss"

const Home = () => {
  const { user } = useAuth()
  return (
    <main className="home-section">
      <HeaderComp />
    </main>
  )
}

export default Home