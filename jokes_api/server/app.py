
"""
jokes api
"""

import json
from flask import Flask, Response
import pyjokes

app = Flask(__name__)

@app.route("/v1/joke")
def get_joke():
    joke = pyjokes.get_joke()
    res = Response(json.dumps({"joke": joke}))
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res

if __name__ == "__main__":
    app.run("0.0.0.0")