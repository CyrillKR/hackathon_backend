import flask
from flask import request
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = flask.Flask(__name__)

df = pd.read_csv('for_modeling.csv')
df_2 = pd.read_csv('for_database.csv')

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
        return int(self.df.head(2).tail(1).index[0])



@app.route('/best_friend')
def best_friend():
    user_id = int(request.args.get("user_id"))
    train_id = int(request.args.get("train_id"))
    nu = Nearest_User(df, user_id)
    index = nu.predict()
    df_final = df_2.loc[index].to_frame().T
    return f"""Your best friend in this train is {df_final['first_name']} {df_final['last_name']}.
            Phone number: {df_final['phone_number']} 
            Email: {df_final['email']}
            """


app.run(host='0.0.0.0', port=8080)