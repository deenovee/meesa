import React, { useState } from 'react';
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import MessageModal from './MessageModal'; 
import './Links.css';

function Links() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <React.Fragment>
      <div className="links">
        <div className="social-links">
          <button>
            <a href="https://instagram.com/divbishh" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </button>
          <button>
            <a href="https://discord.com/users/mnwlkincalabasas" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="social-icon" />
            </a>
          </button>
          <button>
            <a href="https://github.com/deenovee" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </button>
          <button onClick={openModal} className="message-button">
            <MdMessage className="social-icon" />
          </button>
        </div>
      </div>

      <MessageModal isOpen={isModalOpen} onClose={closeModal} />
    </React.Fragment>
  );
}

export default Links;
