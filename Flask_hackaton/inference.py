import flask
from flask import request
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import OrdinalEncoder
from sklearn.preprocessing import StandardScaler

app = flask.Flask(__name__)

df_2 = pd.read_csv('for_database.csv')
df_2['gender'].loc[(df_2['gender'] == 'female')] = 1
df_2['gender'].loc[(df_2['gender'] == 'male')] = 0

df_2['gender'] = df_2['gender'].astype(int)

#Smoking encoding

categ = ['never smoked',  'tried smoking','former smoker', 'current smoker']

oe = OrdinalEncoder(categories=[categ],
                    dtype=int)
oe.fit(df_2[['smoking']])

df_2[['smoking']] = oe.transform(pd.DataFrame(df_2['smoking']))

categ = ['never',  'social drinker','drink a lot']

oe = OrdinalEncoder(categories=[categ],
                    dtype=int)

oe.fit(df_2[['drinking']])

df_2[['drinking']] = oe.transform(pd.DataFrame(df_2['drinking']))


categ = ['currently a primary school pupil',  'primary school', 'secondary school', 'college/bachelor degree', 'masters degree',
            'doctorate degree']

oe = OrdinalEncoder(categories=[categ],
                    dtype=int)

oe.fit(df_2[['education']])

df_2[['education']] = oe.transform(pd.DataFrame(df_2['education']))

df_2['education'].loc[df_2['education']>3]=3

df_2['number_siblings'].loc[df_2['number_siblings']>5]=5

df_train1 = df_2[df_2['train']==1]

scaler = StandardScaler()
scaler.fit(df_train1._get_numeric_data())

df_scaled = pd.DataFrame(data=scaler.transform(df_train1._get_numeric_data()),
             columns=df_train1._get_numeric_data().columns)

df = df_scaled.drop(['phone_number', 'train'], axis=1)

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
    return f"""Your best friend in this train is {list(df_final['first_name'])[0]} {list(df_final['last_name'])[0]} \n
            Phone number: {list(df_final['phone_number'])[0]} \n
            Email: {list(df_final['email'])[0]}
            """


app.run(host='0.0.0.0', port=8080)