// src/App.js
import React, { useState, useRef } from 'react';
import PluralitySocialConnect from 'plurality-social-connect';
import AddMessageForm from './components/AddMessageForm';
import MessageBoard from './components/MessageBoard';
import SubstreamsData from './SubstreamsData';

const App = () => {
  const childRef = useRef(null);
  const [metamaskId, setMetamaskId] = useState(null);
  const [apiKey] = useState('9625d817f8027924978aba65bf4fa68c6302c2b959b9b0c5'); // Replace with your actual API key

  const handleProfileDataReturned = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log('Get profile data:', receivedData);
    alert(JSON.stringify(data));
    setMetamaskId(receivedData.did);
    childRef.current.closeSocialConnectPopup();
  };

  const addMessage = async (message) => {
    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, metamask_id: metamaskId }),
      });

      if (!response.ok) {
        throw new Error('Failed to add message');
      }

      alert('Message added successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to add message');
    }
  };

  return (
    <div>
      {/* <PluralitySocialConnect
        options={{ apps: 'facebook,twitter' }}
        onProfileDataReturned={handleProfileDataReturned}
        ref={childRef}
      /> */}
      {/* <AddMessageForm onSubmit={addMessage} metamaskId={metamaskId} /> */}
      <MessageBoard />
      {/* <SubstreamsData apiKey={apiKey} /> */}
    </div>
  );
};

export default App;
