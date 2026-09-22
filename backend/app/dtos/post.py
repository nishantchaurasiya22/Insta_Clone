from pydantic import BaseModel
class ResponsePost(BaseModel):
    id:int
    caption:str
    image_url:str
    


class ResponsePosts(BaseModel):
    id:int
    caption:str
    image_url:str
    user_name: str 
    profile_image:str
    user_id:int


