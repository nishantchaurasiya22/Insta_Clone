from fastapi import APIRouter, status, Depends
from app.dtos.like import ResponseLikeUser
from typing import List
from app.dependencies import get_current_user
from app.services.like_service import get_post_likes_service, like_post_service, unlike_post_service

like_router = APIRouter(prefix="/likes", tags=["likes"])

@like_router.post("/create_like/{post_id}", status_code=status.HTTP_201_CREATED)
def like(post_id: int, current_user: dict = Depends(get_current_user)):
    user_id = int(current_user["sub"])
    return like_post_service(user_id, post_id)

@like_router.get("/{post_id}", response_model=List[ResponseLikeUser], status_code=status.HTTP_200_OK)
def get_like(post_id: int):
    return get_post_likes_service(post_id)

@like_router.delete("/delete_like/{post_id}", status_code=status.HTTP_200_OK)
def unlike(post_id: int, current_user: dict = Depends(get_current_user)):
    user_id = int(current_user["sub"])
    return unlike_post_service(user_id, post_id)