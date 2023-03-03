import psycopg2
import psycopg2.extras
from config import config

def connect(conn, cur):
    """Connect to the PostgreSQL database server"""
    # global conn, cur
    # conn, cur = None, None
    try:
        # read connection parameters
        params = config()

        # connect to the PostgreSQL server
        print("Connecting to the PostgreSQL database...")
        conn = psycopg2.connect(**params)

        # create a cursor
        cur = conn.cursor()

        # execute a statement
        print("PostgreSQL database version:")
        cur.execute("SELECT version()")

        # display the PostgreSQL database server version
        db_version = cur.fetchone()
        print(db_version)
        return conn, cur

        # close the communication with the PostgreSQL
        # cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)


def closeConn(conn, cur):
    cur.close()
    if conn is not None:
        conn.close()
        print("Database connection closed.")