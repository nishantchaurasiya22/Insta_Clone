from fastapi import APIRouter,status,HTTPException,Response,Depends,UploadFile,File,Form
import psycopg2
from app.dependencies import get_current_user
from app.services.user_service import register_user,authenticate_user,get_user_profile
from app.dtos.user import ResponseUser,LoginUser
auth_router=APIRouter(prefix="/auth" ,tags=["auth"])

@auth_router.post("/register",response_model=ResponseUser,status_code=status.HTTP_201_CREATED)
async def register(
    user_name:str=Form(...),
    email:str=Form(...),
    password:str=Form(...),
    bio:str|None=Form(default=None),
    file:UploadFile|None=File(None)
):
    file_bytes=None
    if file:
        file_bytes=await file.read()
    try:
        return register_user(user_name,email,password,bio,file_bytes)
    except psycopg2.errors.UniqueViolation:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail="User already exist")

@auth_router.post("/login",status_code=status.HTTP_200_OK)
def login(user:LoginUser,response:Response):
    try:
        access_token=authenticate_user(user.identifier,user.password)
        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            secure=False,
            samesite="lax"
        )
        return "Login successfully"
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized user")
    
@auth_router.get("/me",response_model=ResponseUser,status_code=status.HTTP_200_OK)
def get_me(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    user=get_user_profile(user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="User not found")
    return user

@auth_router.post("/logout",status_code=status.HTTP_204_NO_CONTENT)
def logout(response:Response):
    response.delete_cookie("access_token")
    return None