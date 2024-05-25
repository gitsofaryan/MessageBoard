import React from 'react';

const Messages = ({ messages }) => {
    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index}>
                    <p><strong>MetaMask ID:</strong> {msg.metamask_id}</p>
                    <p>{msg.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Messages;
