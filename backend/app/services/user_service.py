from app.repositories.user_reposity import create_user,login_user,get_user
from app.utils.auth import hash_password,verify_password,create_access_token
from app.utils.imagekit_client import upload_image
def register_user(user_name:str,email:str,password:str,bio:str|None=None,file_bytes:bytes|None=None)->dict:
    hashed_password=hash_password(password)
    profile_image=None
    if file_bytes:
        safe_file_name=f"{user_name}_profile.jpg"
        print("DEBUG file_name:",repr(safe_file_name))
        print("DEBUG file_bytes length:",len(file_bytes))
        profile_image=upload_image(file_bytes,safe_file_name,folder="/profile_images")
    return create_user(user_name,email,hashed_password,bio,profile_image)

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