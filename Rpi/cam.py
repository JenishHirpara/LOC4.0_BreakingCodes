from picamera.array import PiRGBArray
from picamera import PiCamera
import time
import cv2
from datetime import datetime 
import firebase_admin
from firebase_admin import storage
from firebase_admin import credentials

camera = PiCamera()
rawCapture = PiRGBArray(camera)

time.sleep(0.1)

camera.capture(rawCapture, format="bgr")
image = rawCapture.array

cv2.imshow("Image", image)
dt = datetime.datetime.now().isoformat()
file_name = f'Shelf_Images_{dt}.jpg'

upload_image(file_name)


cv2.waitKey(0)


def upload_image(image):
    if not firebase_admin._apps:
        cred = credentials.Certificate('ServiceKey.json') 
        default_app = firebase_admin.initialize_app(cred,{
            'storageBucket': 'marketwatcher-e2dcd.appspot.com'
        })
    else:
        default_app = firebase_admin._apps
    bucket = storage.bucket()


    blob = bucket.blob(image)
    blob.upload_from_filename(image)
    blob.make_public()
    print(blob.public_url)
    return blob.public_url
