import React from 'react';
import './Messagehistory.css';

const MessageHistory = ({ messages }) => {
  return (
    <div className='mainrecents'>
      <div className='recents'>
        <h1>Recents</h1>
      </div>
      <div className='message-list'>
        {messages.length === 0 ? (
          <p className='empty'>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <p key={index} className='message-item'>
              {msg.usertext}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageHistory;