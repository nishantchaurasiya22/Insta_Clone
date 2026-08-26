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
             RETURNING follower_id,following_id,status
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

def accept_follow_request(follower_id:int,following_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            UPDATE follows
            SET status='accepted'
            WHERE follower_id=%s AND following_id=%s AND status='pending'
            RETURNING follower_id,following_id,status
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

def reject_follow_request(follower_id:int,following_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
             DELETE from follows
             WHERE follower_id=%s AND following_id=%s AND status='pending'
             RETURNING follower_id,following_id,status
            """,
            (follower_id,follower_id)
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

