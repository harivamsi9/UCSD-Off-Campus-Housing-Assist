from flask import Flask, redirect, url_for, request, render_template
import psycopg2
import psycopg2.extras
from config import config
from src.request_handler.search.JsonTranslator import searchQuery, search_images
from src.request_handler.login.NameInsertion import login


app = Flask(__name__, template_folder="templates")


def connect():
    """Connect to the PostgreSQL database server"""
    global conn, cur
    conn, cur = None, None
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

        # close the communication with the PostgreSQL
        # cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)


def closeConn():
    cur.close()
    if conn is not None:
        conn.close()
        print("Database connection closed.")

# main page
@app.route("/")
def index():
    s = "SELECT * FROM student"
    cur.execute(s)  # Execute the SQL
    list_users = cur.fetchall()
    return render_template("login.html", list_users=list_users)


# this is a test, need to be deleted later
@app.route('/login',methods = ['POST', 'GET'])
def login():
    return login(conn,cur)


@app.route('/search', methods=["GET", "POST"])
def search():
    """
    this method receives filter info from webpage, and sends the query
    result back in json format

    Returns:
        - a json response
    """
    return searchQuery(cur)


if __name__ == '__main__':

    # connect to database
    connect()

    app.run(
        host='localhost',
        port=5000,
        debug=True,
    )

    # close connection
    closeConn()
