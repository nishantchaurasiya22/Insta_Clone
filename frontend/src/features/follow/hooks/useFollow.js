import { useContext } from "react"
import { FollowContext } from "../follow.context"
import { sendFollowRequestAPI } from "../services/follow.api" 

export const useFollow = () => {
    const context = useContext(FollowContext)
    const { follower, pending, following, SetFollower, SetFollowing, SetPending } = context

    const handleSendFollowRequest = async (id) => {
        try {
            await sendFollowRequestAPI(id)
            return { success: true}
        } catch (err) {
            return { success: false, error: err }
        }
    }


    return {
        follower, pending, following,
        handleSendFollowRequest,
    }
}