import flask
from flask import request
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import OrdinalEncoder
from sklearn.preprocessing import StandardScaler

app = flask.Flask(__name__)

df_db = pd.read_csv('for_database_updated.csv')
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

cols_to_scale = [
    'gender', 'birth_year', 'number_siblings', 'education',
    'slow_songs_or_fast_songs', 'dance', 'folk', 'country', 'classical_music',
    'musical', 'pop', 'rock', 'metal_or_hardrock', 'punk', 'hiphop_rap',
    'reggae_ska', 'swing_jazz', 'rock_n_roll', 'alternative', 'latino',
    'techno_trance', 'opera', 'horror', 'thriller', 'comedy', 'romantic',
    'sci_fi', 'war', 'fantasy_fairy_tales', 'animated', 'documentary',
    'western', 'action', 'mathematics', 'physics', 'biology', 'chemistry',
    'medicine', 'geography', 'history', 'psychology', 'politics', 'economy',
    'law', 'science_and_technology', 'internet', 'pc', 'art_exhibitions',
    'theatre', 'dancing', 'musical_instruments', 'writing', 'reading',
    'foreign_languages', 'cars', 'religion', 'gardening', 'celebrities',
    'shopping', 'fun_with_friends', 'pets', 'sport', 'travel', 'flying',
    'thunder_lightning', 'darkness', 'heights', 'spiders', 'snakes',
    'rats_mice', 'aging', 'dangerous_dog', 'public_speaking', 'smoking',
    'drinking', 'healthy_life_style'
]
scaler = StandardScaler()
scaler.fit(df_db[cols_to_scale])

df_scaled = pd.DataFrame(data=scaler.transform(df_db[cols_to_scale]),
                         columns=df_db[cols_to_scale].columns, index=df_db.index)

df = pd.merge(df_scaled, df_db['user_id'], left_index=True, right_index=True)


class Nearest_User:
    def __init__(self, df, user_id, train_id):
        self.user_id = user_id
        self.df = df[df['train'] == train_id]
        self.row_user = np.array(df[df['user_id'] == user_id])

    def predict(self):
        similarities = []
        for i, row in self.df.iterrows():
            similarities.append(cosine_similarity(self.row_user.reshape(1, -1), np.array(row).reshape(1, -1)))
        self.df['similarities'] = similarities
        self.df = self.df.sort_values(by='similarities', ascending=False)
        return int(self.df.head(2).tail(1)['user_id'])


@app.route('/best_friend')
def best_friend():
    user_id = int(request.args.get("user_id"))
    train_id = int(request.args.get("train_id"))
    nu = Nearest_User(df, user_id,train_id)
    index = nu.predict()
    return str(index)


app.run(host='0.0.0.0', port=8080)
