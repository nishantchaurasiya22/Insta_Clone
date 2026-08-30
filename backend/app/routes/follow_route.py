from fastapi import APIRouter,status,HTTPException,Depends
from app.services.follow_service import send_follow_request_service,accept_follow_request_service,reject_follow_request_service,unfollow_follow_request_service,get_followers_service,get_following_service,get_pending_service
from app.dependencies import get_current_user
from app.dtos.follow import ResponseFollow 
from typing import List
import psycopg2
follow_router=APIRouter(prefix="/follow",tags=["follow"])

@follow_router.post("/send_request/{following_id}",response_model=ResponseFollow,status_code=status.HTTP_201_CREATED)
def send_request(following_id:int,current_user:dict=Depends(get_current_user)):
    follower_id=int(current_user["sub"])
    try:
        return send_follow_request_service(follower_id,following_id)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=str(e))
    except psycopg2.errors.UniqueViolation:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail="Follow request already exist")
    except psycopg2.errors.ForeignKeyViolation:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="The user you are trying to follow does not exist")

@follow_router.patch("/accept/{follower_id}",response_model=ResponseFollow,status_code=status.HTTP_200_OK)
def accept_request(follower_id:int,current_user:dict=Depends(get_current_user)):
    following_id=int(current_user["sub"])
    try:
        return accept_follow_request_service(follower_id,following_id)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=str(e))

@follow_router.delete("/reject/{follower_id}",response_model=ResponseFollow,status_code=status.HTTP_200_OK)
def reject_request(follower_id:int,current_user:dict=Depends(get_current_user)):
    following_id=int(current_user["sub"])
    try:
        return reject_follow_request_service(follower_id,following_id)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=str(e))

@follow_router.delete("/unfollow/{following_id}",response_model=ResponseFollow,status_code=status.HTTP_200_OK)
def unfollow_request(following_id:int,current_user:dict=Depends(get_current_user)):
    follower_id=int(current_user["sub"])
    try:
        return unfollow_follow_request_service(follower_id,following_id)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=str(e))

@follow_router.get("/followers",status_code=status.HTTP_200_OK)
def followers(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user["sub"])
    return get_followers_service(user_id)

@follow_router.get("/following",status_code=status.HTTP_200_OK)
def following(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user["sub"])
    return get_following_service(user_id)

@follow_router.get("/request/pending",status_code=status.HTTP_200_OK)
def pending_request(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user["sub"])
    return get_pending_service(user_id)


