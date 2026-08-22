from pydantic_settings import BaseSettings,SettingsConfigDict
class Settings(BaseSettings):
    model_config=SettingsConfigDict(env_file=".env")
    DB_PORT:int
    DB_HOST:str
    DB_PASSWORD:str
    DB_NAME:str
    DB_USER:str
    SECRET_KEY:str
    ALGORITHM:str
    ACCESS_TOKEN_EXPIRE_MINUTES:int
    IMAGEKIT_PRIVATE_KEY:str
settings=Settings()

