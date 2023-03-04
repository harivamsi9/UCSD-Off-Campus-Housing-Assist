from flask import Flask, redirect, url_for, request, render_template
from config import config, get_config
from src.db_adapters.database_interface import getDatabaseAdapter
from src.request_handler.search.JsonTranslator import searchQuery



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
    this method receives filter info from webpage, and sends the query
    result back in json format

    Returns:
        - a json response
    """
    return searchQuery(None)


if __name__ == '__main__':

    
    app.run(
        # host='localhost',
        # port=5000,
        debug=True,
    )

    # close connection
    database.close_connection()