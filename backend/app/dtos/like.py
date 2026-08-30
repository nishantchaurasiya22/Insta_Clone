from pydantic import BaseModel

class ResponseLikeUser(BaseModel):
    id:int
    user_name:str
    profile_image:str|None=None