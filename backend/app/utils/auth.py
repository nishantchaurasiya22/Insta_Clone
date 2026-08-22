from pwdlib import PasswordHash
import jwt
from datetime import datetime,timedelta,timezone
from app.config import settings
password_hash=PasswordHash.recommended()

def hash_password(password:str)->str:
    hashed_password=password_hash.hash(password)
    return hashed_password

def verify_password(password:str,hashed_password:str)->bool:
    return password_hash.verify(password,hashed_password)

def create_access_token(data:dict)->str:
    to_encode=data.copy()
    user_id=to_encode.get("user_id")
    if not user_id:
        raise ValueError("Login required")
    expire=datetime.now(timezone.utc)+timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({
        "sub":str(user_id),
        "exp":expire
    })
    jwt_encoded=jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm=settings.ALGORITHM
    )
    return jwt_encoded

def verify_access_token(token:str)->dict|None:
    try:
        payload=jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
    