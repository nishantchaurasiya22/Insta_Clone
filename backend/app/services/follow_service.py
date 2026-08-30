from app.repositories.follow_repository import send_follow_request,accept_follow_request,reject_follow_request,unfollow_follower_request,get_followers_request,get_following_request,get_pending_request
def send_follow_request_service(follower_id:int,following_id:int)->dict:
    if follower_id==following_id:
        raise ValueError("You cannot follow yourself")
    return send_follow_request(follower_id,following_id)

def accept_follow_request_service(follower_id:int,following_id:int)->dict:
    result=accept_follow_request(follower_id,following_id)
    if not result:
        raise ValueError("No pending request found")
    return result

def reject_follow_request_service(follower_id:int,following_id:int)->dict:
    result=reject_follow_request(follower_id,following_id)
    if not result:
        raise ValueError("No pending request found")
    return result

def unfollow_follow_request_service(follower_id:int,following_id:int)->dict:
    result=unfollow_follower_request(follower_id,following_id)
    if not result:
        raise ValueError("The user you are trying to unfollow does not exist")
    return result

def get_followers_service(user_id:int)->list[dict]:
    return get_followers_request(user_id)

def get_following_service(user_id:int)->list[dict]:
    return get_following_request(user_id)

def get_pending_service(user_id:int)->list[dict]:
    return get_pending_request(user_id)
