from flask import Flask, jsonify, Response  # Added Response for video streaming
from flask_cors import CORS
import cv2
import imutils
import numpy as np
from datetime import datetime
import os

app = Flask(__name__)
cors = CORS(app, origins=['http://localhost:5173']) # this allows frontend to access the backend to the vite default origin ( or origins=['*']) would also work for all local host numbers

os.makedirs('detections', exist_ok=True)

# declaring the object detector setup
HOGCV = cv2.HOGDescriptor() # object detection
HOGCV.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

# Global variable to store camera instance for video streaming
camera = None

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

def generate_frames():
    global camera
    print("📹 Starting frame generation...")
    
    while True:
        if camera is None:
            print("❌ Camera is None")
            break
            
        if not camera.isOpened():
            print("❌ Camera is not opened")
            break
            
        success, frame = camera.read()
        if not success:
            print("❌ Failed to read frame")
            break
        else:
            print("✓ Frame read successfully")
            
            # Use your existing detect function for the video stream
            frame = imutils.resize(frame, width=min(800, frame.shape[1]))
            processed_frame, people_count = detect(frame)
            
            print(f"✓ Frame processed, people detected: {people_count}")
            
            # Encode frame for streaming
            ret, buffer = cv2.imencode('.jpg', processed_frame)
            if not ret:
                print("❌ Failed to encode frame")
                continue
                
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

# NEW: Video feed endpoint
@app.route('/api/video-feed')
def video_feed():
    """Video streaming route"""
    print("🌐 Video feed requested")
    if camera is None:
        print("❌ No camera available for video feed")
        return "Camera not started", 503
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/api/start-camera', methods=['POST'])
def start_camera():
    global camera
    
    print("🎥 Attempting to start camera...")
    camera = cv2.VideoCapture(0)
    
    # Use your existing camera setup logic
    if not camera.isOpened():
        print("❌ Camera 0 failed, trying others...")
        for i in range(1, 5):  # Try camera indices 1-4
            camera = cv2.VideoCapture(i)
            if camera.isOpened():
                print(f"✓ Camera {i} opened successfully")
                break
        else:
            print("❌ No cameras found")
            return jsonify({"error": "Could not open camera."}), 500
    else:
        print("✓ Camera 0 opened successfully")
    
    camera.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
    
    # Test if we can actually read a frame
    ret, test_frame = camera.read()
    if not ret:
        print("❌ Camera opened but cannot read frames")
        return jsonify({"error": "Camera opened but cannot read frames"}), 500
    else:
        print(f"✓ Camera test successful. Frame shape: {test_frame.shape}")
    
    return jsonify({"message": "Camera started successfully"})

# NEW: Stop camera endpoint
@app.route('/api/stop-camera', methods=['POST'])
def stop_camera():
    global camera
    if camera is not None:
        camera.release()
        camera = None
    return jsonify({"message": "Camera stopped successfully"})

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
