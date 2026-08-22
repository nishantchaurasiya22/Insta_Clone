from app.repositories.post_repository import createPost
from app.utils.imagekit_client import upload_image
from uuid import uuid4

def create_post_service(user_id: int, caption: str | None = None, file_bytes: bytes | None = None) -> dict:
    if not file_bytes:
        raise ValueError("file_bytes is required to create a post")
    safe_file_name = f"user_{user_id}_post_{uuid4().hex}.jpg"
    image_url = upload_image(file_bytes, safe_file_name, folder="/post_images")
    return createPost(image_url=image_url, user_id=user_id, caption=caption)