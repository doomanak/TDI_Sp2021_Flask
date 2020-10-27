import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import random

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    b=[ii for ii in request.form.values()] ###DOOMAN
    #a=b[0:3] ###DOOMAN
    a=[1,2,3]
    int_features = [int(x) for x in a] ###DOOMAN
    int_features = int_features 
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    output = round(prediction[0], 2)
    delay_time=random.randint(0,9)
    return render_template('index.html', prediction_text='Employee Salary should be $ {}'.format(output), prediction_text2='The estimated delay time is: {} minutes'.format(delay_time))


if __name__ == "__main__":
    app.run(debug=True)