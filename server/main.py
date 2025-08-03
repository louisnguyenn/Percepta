from flask import Flask, jsonify
from flask_cors import CORS
import cv2
import imutils
import numpy as np

app = Flask(__name__)
cors = CORS(app) # this allows frontend to access the backend

# this function will observe the video in frames and detect any objects (human) and make a box around the person
# it takes a frame and detects a person in it and then returns the frame with the person in a green box
def detect(frame):
    # the detectMultiScale() method returns the coordinates of the box and the confidence value of a person (2-tuple)
    bounding_box_cordinates, weights =  HOGCV.detectMultiScale(frame, winStride = (4, 4), padding = (8, 8), scale = 1.03)
    
    person = 1
    # creating the green box
    for x,y,w,h in bounding_box_cordinates:
        cv2.rectangle(frame, (x,y), (x+w,y+h), (0,255,0), 2) # green box
        cv2.putText(frame, f'person {person}', (x,y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0,255), 1)
        person += 1
    
    cv2.putText(frame, 'Status : Detecting ', (40,40), cv2.FONT_HERSHEY_DUPLEX, 0.8, (255,0,0), 2)
    cv2.putText(frame, f'Total Persons : {person-1}', (40,70), cv2.FONT_HERSHEY_DUPLEX, 0.8, (255,0,0), 2)
    cv2.imshow('output', frame)

    return frame, person - 1

@app.route('/api/detect', methods=['POST'])
def detect_intrusion():
    
    return jsonify({"message": "Frame captured and saved as alert.jpg"})

if __name__ == "__main__":
    HOGCV = cv2.HOGDescriptor() # object detection
    HOGCV.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
    app.run(debug=True)
