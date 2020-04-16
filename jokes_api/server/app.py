
"""
jokes api
"""

import json
from flask import Flask, Response, request, render_template, url_for, make_response, redirect
import pyjokes

app = Flask(__name__)
#joke=Joke()

@app.route("/")
def get_joke():
    return pyjokes.get_joke()

if __name__ == "__main__":
    app.run("0.0.0.0")