from app.repositories.like_repository import get_post_likes, like_post,unlike_post

def like_post_service(user_id: int, post_id: int) -> dict:
    return like_post(user_id, post_id)

def get_post_likes_service(post_id: int) -> list[dict]:
    return get_post_likes(post_id)

def unlike_post_service(user_id: int, post_id: int) -> dict:
    return unlike_post(user_id, post_id)