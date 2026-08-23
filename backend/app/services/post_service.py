from app.repositories.post_repository import create_post,get_all_posts,get_one_post,delete_post
from app.utils.imagekit_client import upload_image
from uuid import uuid4

def create_post_service(user_id:int,caption:str|None=None,file_bytes:bytes|None=None)->dict:
    if not file_bytes:
        raise ValueError("Image is required")
    safe_file_name=f"user_{user_id}_post_{uuid4().hex}.jpg"
    image_url=upload_image(file_bytes,safe_file_name,folder="/post_images")
    return create_post(user_id,image_url,caption)

def get_all_posts_service(user_id:int)->list:
    return get_all_posts(user_id)

def get_one_post_service(task_id:int,user_id:int)->dict:
    return get_one_post(task_id,user_id)

def delete_post_service(task_id:int,user_id:int)->dict:
    return delete_post(task_id,user_id)