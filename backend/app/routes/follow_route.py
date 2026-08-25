from fastapi import APIRouter,status,HTTPException,Depends
follow_router=APIRouter(prefix="/follow",tags=["follow"])
import psycopg2
from app.dependencies import get_current_user
from app.dtos.follows import ResponseFollow
from app.services.follow_service import send_follow_request_service


@follow_router.post("/request/{following_id}",response_model=ResponseFollow,status_code=status.HTTP_201_CREATED)
def request(following_id:int,current_user:dict=Depends(get_current_user)):
    follower_id=int(current_user["sub"])
    try:
        return send_follow_request_service(follower_id,following_id)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=str(e))
    except psycopg2.errors.UniqueViolation:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail="Follow request already send")
    except psycopg2.errors.ForeignKeyViolation:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="The user you are trying to follow does not exist")

