from pydantic import BaseModel
class ResponseUser(BaseModel):
    id:int
    caption:str
    image_url:str
