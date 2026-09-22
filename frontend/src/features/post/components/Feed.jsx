import { useContext, useEffect } from "react"
import "../styles/feed.scss"
import { usePost } from "../hooks/usePost"
import FeedCard from "./FeedCard"
const Feed = () => {
  const{feed,handleFeed}=usePost()
useEffect(() => {
    handleFeed()
}, [])
  return (
    <div className='feed-section'>
      {feed?.map(p=><FeedCard key={p.id} feedCardDetail={p} />)}
    </div>
  )
}

export default Feed