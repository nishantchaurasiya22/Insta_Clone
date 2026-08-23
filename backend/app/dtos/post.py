from pydantic import BaseModel
class ResponsePost(BaseModel):
    id:int
    caption:str
    image_url:str

