import flask
from flask import request
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = flask.Flask(__name__)

df = pd.read_csv('for_modeling.csv')


class Nearest_User:
    def __init__(self, df, user_id):
        self.user_id = user_id
        self.df = df.dropna()
        self.row_user = np.array(df.loc[user_id])
    def predict(self):
        similarities = []
        for i,row in self.df.iterrows():
            similarities.append(cosine_similarity(self.row_user.reshape(1, -1),np.array(row).reshape(1, -1)))
        self.df['similarities'] = similarities
        self.df = self.df.sort_values(by='similarities',ascending=False)
        return self.df.head(2).tail(1)



@app.route('/best_friend')
def best_friend():
    user_id = int(request.args.get("user_id"))
    train_id = int(request.args.get("train_id"))
    nu = Nearest_User(df, user_id)
    return f"Your best friend in this train is {nu.predict()}!!"


app.run(host='0.0.0.0', port=8080)