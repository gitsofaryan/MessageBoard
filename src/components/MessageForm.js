import React, { useState } from 'react';

const MessageForm = ({ onSubmit, metamaskId }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(message, metamaskId);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit">Post Message</button>
        </form>
    );
};

export default MessageForm;
