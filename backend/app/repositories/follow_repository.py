from app.db import get_connection,release_connection
from psycopg2.extras import RealDictCursor
def send_follow_request(follower_id:int,following_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            INSERT INTO follows(follower_id,following_id,status)
            VALUES(%s,%s,'pending')
            RETURNING follower_id,following_id,status,created_at
            """,
            (follower_id,following_id)
        )
        request=cur.fetchone()
        conn.commit()
        return request
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def accept_follow_request(follower_id:int,following_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            UPDATE follows
            SET status='accepted'
            WHERE follower_id=%s AND following_id=%s AND status='pending'
            RETURNING follower_id,following_id,status,created_at
            """,
            (follower_id,following_id)
        )
        request=cur.fetchone()
        conn.commit()
        return request
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def reject_follow_request(follower_id:int,following_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
             DELETE FROM follows
             WHERE follower_id=%s AND following_id=%s AND status='pending'
             RETURNING follower_id,following_id,status,created_at
            """,
            (follower_id,following_id)
        )
        request=cur.fetchone()
        conn.commit()
        return request
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def unfollow_follower_request(follower_id:int,following_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            DELETE FROM follows
            WHERE follower_id=%s AND following_id=%s AND status='accepted'
            RETURNING follower_id,following_id,status,created_at
            """,
            (follower_id,following_id)
        )
        result=cur.fetchone()
        conn.commit()
        return result
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def get_followers_request(user_id:int)->list[dict]:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT u.id,u.user_name,u.profile_image
            FROM follows f
            JOIN users u ON u.id=f.follower_id
            WHERE f.following_id=%s AND f.status='accepted'
            """,
            (user_id,)
        )
        return cur.fetchall()
    finally:
        cur.close()
        release_connection(conn)

def get_following_request(user_id:int)->list[dict]:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT u.id,u.user_name,u.profile_image
            FROM follows f
            JOIN users u ON u.id=f.following_id
            WHERE f.follower_id=%s AND f.status='accepted'
            """,
            (user_id,)
        )
        return cur.fetchall()
    finally:
        cur.close()
        release_connection(conn)

def get_pending_request(user_id:int)->list[dict]:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT u.id,u.user_name,u.profile_image
            FROM follows f
            JOIN users u ON u.id=f.follower_id
            WHERE f.following_id=%s AND f.status='pending'
            """,
            (user_id,)
        )
        return cur.fetchall()
    finally:
        cur.close()
        release_connection(conn)