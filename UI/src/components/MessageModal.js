// src/components/MessageModal.js

import React from 'react';
import './MessageModal.css'; // Import the modal's CSS

function MessageModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  let url = 'http://localhost:5000/message';
  let sendMessage = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let message = event.target.message.value;
  
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log('Message sent successfully!');
      onClose();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }
  
  return (
    <div className="message-modal">
      <button onClick={onClose} className="close-modal">
        &times;
      </button>
      <div className="modal-content">
        <h2>Send a Message</h2>
        <form onSubmit={sendMessage} >
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Your Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default MessageModal;
