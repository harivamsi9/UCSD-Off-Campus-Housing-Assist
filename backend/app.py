from flask import Flask, request, render_template
from config import get_config
from src.db_adapters.database_interface import getDatabaseAdapter
from src.request_handler.search.search_handler import search_filter

# Global variables
global database
database = getDatabaseAdapter(get_config()["database"])
app = Flask(__name__, template_folder="templates")


@app.route("/")
# main page
def index():
    list_users = "Nothing"
    return render_template("login.html", list_users=list_users)


@app.route('/search', methods=["POST"])
def search():
    """
    Receives filter info from webpage, and sends the query
    result back in json format

    Returns:
        - a json response
    """
    #database.query("SELECT * FROM property WHERE bedroom=2 AND bathroom=2;")
    #return database.cursor.fetchall()
    return search_filter(database, request.get_json())


if __name__ == '__main__':
    
    app.run(
        # host='localhost',
        # port=5000,
        debug=True,
    )

    # close connection
    database.close_connection()