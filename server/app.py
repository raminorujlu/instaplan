from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# This will store our activities in memory
activities = []

@app.route('/')
def index():
    return jsonify("Planning App is Running")

# Endpoint to fetch all activities
@app.route('/activities', methods=['GET'])
def get_activities():
    print(activities)
    print("Salam")
    return jsonify(activities)

# Endpoint to add an activity
@app.route('/add_activity', methods=['POST'])
def add_activity():
    data = request.get_json()
    user_name = data.get('user_name')
    activity_title = data.get('activity_title')

    # Create a new activity object and add to the activities list
    activity = {
        'user_name': user_name,
        'activity_title': activity_title
    }
    activities.append(activity)
    print("Activities:", activities)

    return jsonify({"message": "Activity added successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)
