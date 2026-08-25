from pydantic import BaseModel

class ResponseFollow(BaseModel):
    follower_id:int
    following_id:int
    status:str
