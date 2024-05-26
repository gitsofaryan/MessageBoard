from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from localhost:3000

messages = []

@app.route('/api/messages', methods=['GET'])
def get_messages():
    return jsonify(messages)

@app.route('/api/messages', methods=['POST'])
def add_message():
    data = request.get_json()
    message = data.get('message')
    metamask_id = data.get('metamask_id')
    if message and metamask_id:
        messages.append({'message': message, 'metamask_id': metamask_id})
        return jsonify({'status': 'success', 'message': 'Message added successfully'}), 201
    return jsonify({'status': 'error', 'message': 'Invalid data'}), 400

@app.route('/api/substreams', methods=['GET'])
def get_substreams_data():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    # Replace 'module_name' and 'param_value' with actual module and parameter values
    result = subprocess.run(
        ['substreams', 'run', 'module_name', '--param', 'param_value'],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        return jsonify({'status': 'error', 'message': result.stderr}), 500

    data = json.loads(result.stdout)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
