from fastapi import APIRouter, HTTPException, status, UploadFile, File, Form, Depends
from app.services.post_service import create_post_service,get_all_posts_service,get_one_post_service,delete_post_service
from typing import List
from app.dependencies import get_current_user
from app.dtos.post import ResponsePost
post_router = APIRouter(prefix="/posts", tags=["posts"])


@post_router.post("/create_post",response_model=ResponsePost,status_code=status.HTTP_201_CREATED)
async def create_post(
    caption: str | None = Form(default=None),
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user)
):
    file_bytes = await file.read()
    try:
        post = create_post_service(
            user_id=int(current_user["sub"]),
            caption=caption,
            file_bytes=file_bytes
        )
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create post"
        )
    return post

@post_router.get("/get_posts",response_model=List[ResponsePost],status_code=status.HTTP_200_OK)
def get_tasks(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user["sub"])
    return get_all_posts_service(user_id)

@post_router.get("/get_post/{task_id}",response_model=ResponsePost,status_code=status.HTTP_200_OK)
def get_post(task_id:int,current_user:dict=Depends(get_current_user)):
    user_id=int(current_user["sub"])
    result=get_one_post_service(task_id,user_id)
    if not result:
        raise HTTPException(status.HTTP_404_NOT_FOUND,detail="Post not found")
    return result

@post_router.delete("/delete_post/{task_id}",response_model=None,status_code=status.HTTP_204_NO_CONTENT)
def delete_post(task_id:int,current_user:dict=Depends(get_current_user)):
    user_id=int(current_user["sub"])
    result=delete_post_service(task_id,user_id)
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Post not found")
    return None


