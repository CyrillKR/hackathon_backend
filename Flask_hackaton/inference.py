import flask
from flask import request

app = flask.Flask(__name__)


@app.route('/best_friend')
def best_friend():
    user_id = int(request.args.get("user_id"))
    train_id = int(request.args.get("train_id"))
    return f"Your best friend in this train is Regina!!"


app.run(host='0.0.0.0', port=8080)