from flask import Flask, redirect, url_for, request, render_template
import psycopg2
import psycopg2.extras
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    conn = psycopg2.connect("postgresql://postgres:1234560@localhost:5432/postgres")
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    s = "SELECT * FROM student"
    cur.execute(s) # Execute the SQL
    list_users = cur.fetchall()

    # cur.execute("INSERT INTO table_1 (user_id,password) VALUES ('c',2)")
    # conn.commit()
    # flash('Student Added successfully')

    return render_template('login.html',list_users = list_users)



@app.route('/success/<name>')
def success(name):
    return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        print(1)
        user = request.form['nm']
        return redirect(url_for('success',name = user))
    else:
        print(2)
        user = []
        user.append(request.args.get('nm0'))
        user.append(request.args.get('nm1'))
        user.append(request.args.get('nm2'))
        user.append(request.args.get('nm3'))
        user.append(request.args.get('pid'))


        conn = psycopg2.connect("postgresql://postgres:1234560@localhost:5432/postgres")
        cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cur.execute("INSERT INTO student (studentid,name,email,password,phone) VALUES (%s,%s,%s,%s,%s)",(user[4],user[0],user[1],user[2],user[3]))
        conn.commit()

        return redirect(url_for('index',name = user))

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5321,
        debug=True,
)