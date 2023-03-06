from flask import request, redirect, url_for
import sys
sys.path.append("../../..")

def login(conn,cur):
    if request.method == "POST":
        print(1)
        user = request.form["nm"]
        return redirect(url_for("success", name=user))
    else:
        print(2)
        user = []
        user.append(request.args.get("nm0"))
        user.append(request.args.get("nm1"))
        user.append(request.args.get("nm2"))
        user.append(request.args.get("nm3"))
        user.append(request.args.get("pid"))

        cur.execute(
            "INSERT INTO student (studentid,name,email,password,phone) VALUES (%s,%s,%s,%s,%s)",
            (user[4], user[0], user[1], user[2], user[3]),
        )
        conn.commit()

        return redirect(url_for("index", name=user))