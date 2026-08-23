from psycopg2.extras import RealDictCursor
from typing import Optional
from app.db import get_connection,release_connection

def create_post(user_id:int,image_url:str,caption:str|None=None)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            INSERT INTO posts(user_id,image_url,caption)
            VALUES(%s,%s,%s)
            RETURNING  id,caption,image_url
            """,
            (user_id,image_url,caption)
        )
        post=cur.fetchone()
        conn.commit()
        return post
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def get_all_posts(user_id:int)->list:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT id,caption,image_url FROM posts
            WHERE user_id=%s
            ORDER BY id
            """,
            (user_id,)
        )
        result=cur.fetchall()
        return result
    finally:
        cur.close()
        release_connection(conn)

def get_one_post(task_id:int,user_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
             SELECT id,caption,image_url FROM posts
             WHERE id=%s AND user_id=%s
            """,
            (task_id,user_id)
        )
        post=cur.fetchone()
        return post
    finally:
        cur.close()
        release_connection(conn)

def delete_post(task_id:int,user_id:int)->Optional[bool]:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
             DELETE FROM posts
             WHERE id=%s AND user_id=%s
            """,
            (task_id,user_id)
        )
        if cur.rowcount==0:
            return None
        conn.commit()
        return True
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)