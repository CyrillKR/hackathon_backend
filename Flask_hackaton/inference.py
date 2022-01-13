import flask
from flask import request
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import OrdinalEncoder
from sklearn.preprocessing import StandardScaler

app = flask.Flask(__name__)

df_db = pd.read_csv('for_database.csv')
df_db['gender'].loc[(df_db['gender'] == 'female')] = 1
df_db['gender'].loc[(df_db['gender'] == 'male')] = 0
df_db['gender'] = df_db['gender'].astype(int)

categ = ['never smoked', 'tried smoking', 'former smoker', 'current smoker']
oe = OrdinalEncoder(categories=[categ],
                    dtype=int)
oe.fit(df_db[['smoking']])
df_db[['smoking']] = oe.transform(pd.DataFrame(df_db['smoking']))

categ = ['never', 'social drinker', 'drink a lot']
oe = OrdinalEncoder(categories=[categ],
                    dtype=int)
oe.fit(df_db[['drinking']])
df_db[['drinking']] = oe.transform(pd.DataFrame(df_db['drinking']))

categ = ['currently a primary school pupil', 'primary school', 'secondary school', 'college/bachelor degree',
         'masters degree',
         'doctorate degree']
oe = OrdinalEncoder(categories=[categ],
                    dtype=int)
oe.fit(df_db[['education']])
df_db[['education']] = oe.transform(pd.DataFrame(df_db['education']))
df_db['education'].loc[df_db['education'] > 3] = 3

df_db['number_siblings'].loc[df_db['number_siblings'] > 5] = 5

scaler = StandardScaler()
scaler.fit(df_db._get_numeric_data())

df_scaled = pd.DataFrame(data=scaler.transform(df_db._get_numeric_data()),
                         columns=df_db._get_numeric_data().columns)

df = df_scaled.drop(['phone_number', 'train'], axis=1)


class Nearest_User:
    def __init__(self, df, user_id):
        self.user_id = user_id
        self.df = df.dropna()
        self.row_user = np.array(df.loc[user_id])

    def predict(self):
        similarities = []
        for i, row in self.df.iterrows():
            similarities.append(cosine_similarity(self.row_user.reshape(1, -1), np.array(row).reshape(1, -1)))
        self.df['similarities'] = similarities
        self.df = self.df.sort_values(by='similarities', ascending=False)
        return int(self.df.head(2).tail(1).index[0])


@app.route('/best_friend')
def best_friend():
    user_id = int(request.args.get("user_id"))
    train_id = int(request.args.get("train_id"))
    nu = Nearest_User(df, user_id)
    index = nu.predict()
    df_final = df_db.loc[index].to_frame().T
    return f"""Your best friend in this train is {list(df_final['first_name'])[0]} {list(df_final['last_name'])[0]} \n
            Phone number: {list(df_final['phone_number'])[0]} \n
            Email: {list(df_final['email'])[0]}
            """

@app.route('/best_friend/picture')
def picture():
    return "https://images.app.goo.gl/XppjPp9iHgA514zv5"


@app.route('/best_friend/bio')
def bio():
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

app.run(host='0.0.0.0', port=8080)
