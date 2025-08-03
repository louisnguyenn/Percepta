from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app) # this allows frontend to access the backend

@app.route('/api/users', methods=['GET'])

def users():
    return jsonify(
        {
            "users": [
                "Alice",
                "Louis",
                "Charlie"
            ]
        }
    )

if __name__ == "__main__":
    app.run(debug=True)
