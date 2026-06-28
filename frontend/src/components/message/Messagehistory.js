import React, { useEffect, useState } from 'react';
import './Messagehistory.css';

const MessageHistory = () => {
  const[getmess,setgetmess]=useState([])
  const Fetchmessages= async ()=>{
    try {
    const Mdata = await fetch("http://localhost:5000/api/getprompt", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    });

    const PromptM= await Mdata.json();
    setgetmess(PromptM.data.question)
   // sethistory((prev)=>([...prev,PromptD]))
    
    console.log( "Messages",getmess);
  } catch (error) {
    console.log(error);
  }
 
}
 useEffect(()=>{
Fetchmessages();
  },[])
  return (
    <div className='mainrecents'>
      <div className='recents'>
        <h1>Recents</h1>
      </div>
      <div className='message-list'>
        {getmess.length === 0 ? (
          <p className='empty'>No messages yet</p>
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