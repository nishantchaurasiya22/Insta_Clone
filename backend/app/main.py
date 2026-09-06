from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.user_route import auth_router
from app.routes.post_route import post_router
from app.routes.follow_route import follow_router
from app.routes.like_route import like_router
app=FastAPI(title="INSTA_CLONE_API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(post_router)
app.include_router(follow_router)
app.include_router(like_router)