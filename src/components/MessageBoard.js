import React, { useState, useEffect } from 'react';
import MessageForm from './MessageForm';
import Messages from './Messages';
import PluralityConnect from './PluralityConnect';
import AddMessageForm from './AddMessageForm';

const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const [metamaskId, setMetaMaskId] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/messages')
            .then(response => response.json())
            .then(data => setMessages(data));
    }, []);

    const addMessage = (message, metamaskId) => {
        fetch('http://localhost:5000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, metamask_id: metamaskId }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMessages(prevMessages => [...prevMessages, { message, metamask_id: metamaskId }]);
        });
    };

    return (
        <div>
            <PluralityConnect onMetaMaskAccount={setMetaMaskId} />
            <h1>Message Board</h1>
            <MessageForm onSubmit={addMessage} metamaskId={metamaskId} />
            <Messages messages={messages} />
            {/* <AddMessageForm  onSubmit={addMessage} metamaskId={metamaskId} /> */}
        </div>
    );
};

export default MessageBoard;
