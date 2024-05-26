# Message Board Application

This is a React and Flask-based Message Board application that allows users to post messages and delete them. The application also integrates with MetaMask for user identification and Pinax API for data integration.

## Features

- Post messages with associated MetaMask ID
- Delete messages
- MetaMask integration for user authentication
- Display user profile data from Plurality Connect
- Fetch and display data from Pinax API

## Prerequisites

- Node.js and npm installed
- Python and Flask installed
- MetaMask browser extension installed

## Installation

### Backend (Flask)

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/message-board-app.git
    cd message-board-app
    ```

2. Set up a virtual environment:
    ```sh
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Run the Flask server:
    ```sh
    python app.py
    ```

### Frontend (React)

1. Navigate to the `client` directory:
    ```sh
    cd client
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the React development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Connect your MetaMask wallet.
3. Post a message using the form provided.
4. Delete messages using the delete button next to each message.

## API Endpoints

### Messages

- `GET /api/messages` - Retrieve all messages
- `POST /api/messages` - Add a new message
- `DELETE /api/messages/<message_id>` - Delete a message

### Substreams (Pinax API)

- `POST /api/substreams` - Retrieve data from the Pinax API

## Environment Variables

- `REACT_APP_PINAX_API_KEY` - Your Pinax API key

## File Structure

message-board-app/
├── client/ # Frontend React application
│ ├── public/ # Public assets
│ ├── src/ # Source files
│ │ ├── components/ # React components
│ │ │ ├── AddMessageForm.js # Component for adding a new message
│ │ │ ├── DeleteMessageButton.js # Component for deleting a message
│ │ │ ├── MessageForm.js # Form for submitting messages
│ │ │ ├── Messages.js # Displays the list of messages
│ │ │ ├── PluralityConnect.js # Component for integrating Plurality Connect
│ │ │ ├── SubstreamsData.js # Component for fetching and displaying Pinax API data
│ │ ├── App.js # Main App component
│ │ ├── index.js # Entry point of the React application
│ ├── package.json # npm package configuration
├── app.py # Flask backend application
├── requirements.txt # Python package dependencies
└── README.md # Project documentation


### Frontend

- React
- ReactDOM
- MetaMask
- Plurality Connect

### Backend

- Flask
- Flask-CORS

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

- [MetaMask](https://metamask.io/)
- [Plurality Connect](https://pluralityconnect.io/)
- [Pinax API](https://github.com/pinax-network/awesome-substreams)

## Contact

For any questions or feedback, please contact [mail.aryan.jain07@gmail.com](mail.aryan.jain07@gmail.com).


