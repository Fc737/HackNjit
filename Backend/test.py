###Test
from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression
import numpy as np

def create_app():
    #create an instance of application inside of the method

    app = Flask(__name__)
    
    #return application
    return app

if __name__ == '__main__':
    app.run(debug=True)
