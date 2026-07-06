import React, { useEffect, useState ,useContext} from 'react';
import './Messagehistory.css';
import { ChatContext } from '../../context/ChatContext';
import { MessageSquare } from 'lucide-react';

const MessageHistory = () => {
  const { getmess,getdata,setgetmess ,Cresponse,setCresponse,messageclick} = useContext(ChatContext); 
  
useEffect(() => {

   getdata();
  
  }, [getmess]);
  
  return (
    <div className='mainrecents'>
      <div className='recents'>
        <h1>Recents</h1>
      </div>
      <div className='newchat'>
  <div>
    <MessageSquare size={18} />
    <p>New Chat</p>
  </div>
</div>
      <div className='message-list'>
        {getmess.length === 0 ? (
          <p className='empty'>No message yet</p>
        ) : (
          getmess.map((msg, index) => (
            <p key={index} className='message-item' onClick={()=>messageclick(msg._id)}>
              {msg.question}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageHistory;