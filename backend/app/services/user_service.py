from app.repositories.user_reposity import create_user,login_user,get_user
from app.utils.auth import hash_password,verify_password,create_access_token
def register_user(user_name:str,email:str,password:str)->dict:
    hashed_password=hash_password(password)
    return create_user(user_name,email,hashed_password)

def authenticate_user(identifier:str,password:str)->dict:
    user=login_user(identifier)
    if not user:
        raise ValueError("Invalid Credentials")
    password_correct=verify_password(password,user["hashed_password"])
    if not password_correct:
        raise ValueError("Invalid Credentials")
    access_token=create_access_token({
        "user_id":user["id"]
    })
    return access_token

def get_user_profile(user_id:int):
    user=get_user(user_id)
    if not user:
        raise ValueError('Invalid credentials')
    return user