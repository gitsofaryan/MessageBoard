import React, { useState } from 'react';

const AddMessageForm = () => {
  const [message, setMessage] = useState('');
  const [metamaskId, setMetamaskId] = useState('');
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, metamask_id: metamaskId }),
      });
      const data = await response.json();
      if (response.ok) {
        setAlert({ type: 'success', message: data.message });
      } else {
        setAlert({ type: 'error', message: data.message });
      }
    } catch (error) {
      console.error('Error adding message:', error);
      setAlert({ type: 'error', message: 'Failed to add message' });
    }
  };

  return (
    <div>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="metamaskId" className="form-label">MetaMask ID</label>
          <input
            type="text"
            className="form-control"
            id="metamaskId"
            value={metamaskId}
            onChange={(e) => setMetamaskId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddMessageForm;
