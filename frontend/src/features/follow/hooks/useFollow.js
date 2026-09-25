import { useContext } from "react";
import { FollowContext } from "../follow.context"
import { sendFollowRequest } from "../services/follow.api";


const useFollow = () => {
    const context = useContext(FollowContext)
    const { request, SetRequest } = context
    const handleSendFollowRequest = async (following_id) => {
        try {
            const res=await sendFollowRequest(following_id)
            console.log(res);
            
            SetRequest(pre=>[...pre,following_id])
            return {
                success: true,
                data: res
            }
        } catch (err) {
            return {
                success: false,
                error: err
            }
        }
    }

    return {
        request, handleSendFollowRequest
    }
}

export default useFollow