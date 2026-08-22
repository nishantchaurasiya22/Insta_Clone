from fastapi import APIRouter, HTTPException, status, UploadFile, File, Form, Depends
from app.services.post_service import create_post_service
from app.dependencies import get_current_user

post_router = APIRouter(prefix="/posts", tags=["posts"])


@post_router.post("/create_post")
async def create_post(
    caption: str | None = Form(default=None),
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user)
):
    file_bytes = await file.read()

    try:
        post = create_post_service(
            user_id=int(current_user["sub"]),
            caption=caption,
            file_bytes=file_bytes
        )
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        print("DEBUG ERROR:", repr(e))
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create post"
        )

    return post