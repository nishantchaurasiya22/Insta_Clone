from psycopg2.extras import RealDictCursor
from app.db import get_connection, release_connection

def createPost(image_url: str, user_id: int, caption: str | None = None):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
             INSERT INTO posts(caption, image_url, user_id)
             VALUES(%s, %s, %s)
             RETURNING id, caption, image_url, user_id
            """,
            (caption, image_url, user_id)
        )
        post = cur.fetchone()
        conn.commit()
        return post
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)