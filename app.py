from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True)
