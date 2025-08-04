from flask import Flask, jsonify
from flask_cors import CORS
import cv2
import imutils
import numpy as np
from datetime import datetime
import os

app = Flask(__name__)
cors = CORS(app, origins=['*']) # this allows frontend to access the backend to all origins (or origins=['http://localhost:5173']) would also work

os.makedirs('detections', exist_ok=True)

# declaring the object detector setup
HOGCV = cv2.HOGDescriptor() # object detection
HOGCV.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

# this function will observe the video in frames and detect any objects (human) and make a box around the person
# it takes a frame and detects a person in it and then returns the frame with the person in a green box
def detect(frame):
    # the detectMultiScale() method returns the coordinates of the box and the confidence value of a person (2-tuple)
    boxes, weights = HOGCV.detectMultiScale(frame, winStride = (4, 4), padding = (8, 8), scale = 1.03)
    
    person = 1
    # creating the green box
    for x, y, w, h in boxes:
        cv2.rectangle(frame, (x,y), (x+w,y+h), (0,255,0), 2) # green box
        cv2.putText(frame, f'person {person}', (x,y), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0,255), 1)
        person += 1
    
    # cv2.putText(frame, 'Status : Detecting ', (40,40), cv2.FONT_HERSHEY_DUPLEX, 0.8, (255,0,0), 2)
    cv2.putText(frame, f'Total Persons : {person-1}', (40,70), cv2.FONT_HERSHEY_DUPLEX, 0.8, (255,0,0), 2)

    return frame, person - 1

# this function will open the webcam and detect any object (humans) in the camera.
# if it does detect, it will end the recording and save the frame of the object to a jpg file
@app.route('/api/detect', methods=['POST'])
def detect_intrusion():
    video = cv2.VideoCapture(0) # passing 0 in the function means we want to record from webcam
    
    # check if camera opened successfully
    if not video.isOpened():
        for i in range(1, 5):  # Try camera indices 1-4
            video = cv2.VideoCapture(i)
            if video.isOpened():
                break
        else:
            return jsonify({"error": "Could not open camera."}), 500 # returning server error 500
    
    video.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    video.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    check, frame = video.read() # this method reads the video frame by frame
    video.release()
    
    if not check:
        return jsonify({"error": "Failed to read frame from camera"}), 500

    # resize frame before detection for better performance
    frame = imutils.resize(frame, width=min(800, frame.shape[1]))
    
    processed_frame, people_count = detect(frame)   # sending each frame to the detect function, where it will be processed
                            # for object detection 

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = None

    if people_count > 0:
        filename = f"detections/intrusion_{timestamp}.jpg"
        cv2.imwrite(filename, processed_frame)

    return jsonify({
        "message": "Detection complete.",
        "people_detected": people_count,
        "image_saved_as": filename,
        "timestamp": timestamp,
        "alert": people_count > 0
    })

# this is a testing function to see if the frontend is connected to the backend
@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint to verify backend is running"""
    return jsonify({
        "status": "healthy",
        "message": "Percepta backend is running",
    })

if __name__ == "__main__":
    app.run(debug=True)
