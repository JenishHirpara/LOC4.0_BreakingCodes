import re

import os

from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from fastapi import FastAPI, Form, status
import requests
from pydantic import BaseModel
from fastapi import Body, FastAPI

import warnings
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
from collections import Counter

import os
from PIL import Image
import sys
import time
from decouple import config

warnings.filterwarnings("ignore")


app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Query(BaseModel):
    query: str


@app.post("/counter")
def counter(qstr: Query):
    print(qstr)
    x = re.findall(r'(https?://\S+)', str(qstr))
    print(x[0])
    subscription_key = config('COMPUTER_VISION_SUBSCRIPTION_KEY')
    endpoint = config('COMPUTER_VISION_ENDPOINT')
    l = []
    computervision_client = ComputerVisionClient(
        endpoint, CognitiveServicesCredentials(subscription_key))

    
    remote_image_url = x[0]
    
    
    
    detect_brands_results_remote = computervision_client.analyze_image(
        remote_image_url, remote_image_features)

    
    if len(detect_brands_results_remote.brands) == 0:
        print("Nothing Detected!")
    else:
        for brand in detect_brands_results_remote.brands:
            l.append(brand.name)

    print(l)
    print(len(l))
    total_items = len(l)
    item_count = dict(Counter(l))
    count_item = item_count.copy()

    for k, v in item_count.items():
        item_count[k] = (v/len(l))*100

    print(item_count)
    return {
        "Percentage": item_count,
        "Total Count": count_item
    }
    #Write to DB