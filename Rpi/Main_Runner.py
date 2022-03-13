from flask import Flask, request, jsonify
import json

from requests import get, post

@app.route("/")
def hello_world():
    try:
        return "Hello, World!"
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})


@app.route('/run_analysis', methods=['POST'])
def run_analysis():
    url = "https://customvisiondemoex-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/8bd08eba-6a01-4ba9-97e9-ef463b0c4c4b/detect/iterations/Iteration2/url"
    payload = json.dumps({
    "Url": "https://flask-env-1.s3.us-east-2.amazonaws.com/test.jpeg"
    })
    headers = {
  'Content-Type': 'application/json',
  'Prediction-Key': '1504c0c3fa334b61b3d5cde9a792f2f1'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)

