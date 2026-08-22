from imagekitio import ImageKit
from app.config import settings

imagekit = ImageKit(
    private_key=settings.IMAGEKIT_PRIVATE_KEY,
)

def upload_image(file_bytes: bytes, file_name: str, folder: str) -> str:
    response = imagekit.files.upload(
        file=file_bytes,
        file_name=file_name,
        folder=folder,
        use_unique_file_name=True
    )
    return response.url