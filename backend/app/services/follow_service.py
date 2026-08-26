from app.repositories.follow_repository import send_follow_request,accept_follow_request,reject_follow_request

def send_follow_request_service(follower_id:int,following_id:int)->dict:
    if follower_id==following_id:
        raise ValueError("You can not follow yourself")
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
