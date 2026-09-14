from pydantic import BaseModel,EmailStr
from typing import Optional
class CreateUser(BaseModel):
    user_name:str
    email:EmailStr
    password:str


class ResponseUser(BaseModel):
    id:int
    user_name:str
    email:EmailStr
    bio:Optional[str]=None
    profile_image:Optional[str]=None

class LoginUser(BaseModel):
    identifier:str
    password:str

