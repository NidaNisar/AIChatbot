import React, { useEffect, useState ,useContext} from 'react';
import './Messagehistory.css';
import { ChatContext } from '../../context/ChatContext';
const MessageHistory = () => {
  const { getmess,getdata,setgetmess } = useContext(ChatContext); 
useEffect(() => {

   getdata();
   console.log("history",getmess)
  }, [getmess]);
  return (
    <div className='mainrecents'>
      <div className='recents'>
        <h1>Recents</h1>
      </div>
      <div className='message-list'>
        {getmess.length === 0 ? (
          <p className='empty'>No message yet</p>
        ) : (
          getmess.map((msg, index) => (
            <p key={index} className='message-item'>
              {msg.question}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageHistory;