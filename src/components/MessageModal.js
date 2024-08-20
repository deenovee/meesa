// src/components/MessageModal.js

import React from 'react';
import './MessageModal.css'; // Import the modal's CSS

function MessageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="message-modal">
      <button onClick={onClose} className="close-modal">
        &times;
      </button>
      <div className="modal-content">
        <h2>Send a Message</h2>
        <form>
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
