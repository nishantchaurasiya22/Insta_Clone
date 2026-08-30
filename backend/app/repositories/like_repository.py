from app.db import get_connection, release_connection
from psycopg2.extras import RealDictCursor

def like_post(user_id: int, post_id: int) -> dict:
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            INSERT INTO likes(user_id, post_id)
            VALUES(%s, %s)
            RETURNING id, user_id, post_id, created_at
            """,
            (user_id, post_id)
        )
        result = cur.fetchone()
        conn.commit()
        return result
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def get_post_likes(post_id: int) -> list[dict]:
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT u.id, u.user_name, u.profile_image
            FROM likes l
            JOIN users u ON u.id = l.user_id
            WHERE l.post_id = %s
            """,
            (post_id,)
        )
        return cur.fetchall()
    finally:
        cur.close()
        release_connection(conn)

def unlike_post(user_id: int, post_id: int) -> dict:
    conn = get_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            DELETE FROM likes
            WHERE user_id = %s AND post_id = %s
            """,
            (user_id, post_id)
        )
        result = cur.fetchone()
        conn.commit()
        return result
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)