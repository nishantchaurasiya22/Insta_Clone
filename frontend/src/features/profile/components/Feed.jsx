import { useContext } from "react"
import { ProfileContext } from "../profile.context"
import ProfileCard from "./ProfileCard"
import "../styles/feed.scss"
const Feed = () => {
   const context=useContext(ProfileContext)
  const{feed}=context 
  return (
    <div className='feed-section'>
      {feed?.map(p=><ProfileCard key={p.id} profile={p} />)}
    </div>
  )
}

export default Feed