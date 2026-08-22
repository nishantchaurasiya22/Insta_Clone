from fastapi import FastAPI
from app.routes.user_route import auth_router
from app.routes.post_route import post_router
app=FastAPI()

app.include_router(auth_router)
app.include_router(post_router)