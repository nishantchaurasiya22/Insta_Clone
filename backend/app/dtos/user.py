from pydantic import BaseModel,EmailStr

class CreateUser(BaseModel):
    user_name:str
    email:EmailStr
    password:str


class ResponseUser(BaseModel):
    id:int
    user_name:str
    email:EmailStr

class LoginUser(BaseModel):
    identifier:str
    password:str

