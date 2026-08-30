from pydantic import BaseModel
from datetime import datetime
class ResponseFollow(BaseModel):
    follower_id:int
    following_id:int
    status:str
    created_at:datetime

class ResponseUserList(BaseModel):
    id:int
    user_name:str
    profile_image:str|None=None