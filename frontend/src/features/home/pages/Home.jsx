import { useAuth } from "../../auth/hooks/useAuth"


const Home = () => {
  const { user } = useAuth()

  
  return (
    <main>
     <h1>{user?.user_name}</h1>
     <img src={user?.profile_image} alt="profile_image" />
    </main>
  )
}

export default Home