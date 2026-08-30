from pydantic import BaseModel
from datetime import datetime
class ResponseFollow(BaseModel):
    follower_id:int
    following_id:int
    status:str
    created_at:datetime